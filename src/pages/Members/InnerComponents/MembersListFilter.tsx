import React, { useState } from 'react';
import { MARITAL_STATUS } from '@constants/MARITAL_STATUS';
import { RELIGION } from '@constants/RELIGION';
import { SUB_CASTE } from '@constants/SUB_CASTE';
import { LANGUAGES } from '@constants/LANGUAGES';
import { countriesWithStatesAndCities } from '@constants/COUNTRIES';
import { EMPLOYED_IN } from '@constants/EMPLOYED_IN';
import { EDUCATION_LEVEL } from '@constants/EDUCATION_LEVEL';
import { SearchRequest } from '../../../api/models';
import { postSearchRequest } from '../../../api';
import { Profile } from '../Profile';
import { loggedInUser } from '@store/LoggedInUser/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStarted, loadingStopped } from '@store/IsLoading/reducer';

const MembersListFilter: React.FC<{
    onListUpdate: (newProfiles: Array<Profile>) => void;
}> = ({ onListUpdate }) => {
    const dispatch = useDispatch();
    const [initialSearch] = useState(localStorage.getItem('search'));
    const [beginningSearch, setBeginningSearch] = useState(
        initialSearch ? JSON.parse(initialSearch) : undefined
    );
    const loggedInUserInfo = useSelector(loggedInUser);
    const [lookingFor, setLookingFor] = useState(
        loggedInUserInfo?.gender === 'Male' ? 'Female' : 'Male'
    );
    const [religion, setReligion] = useState('');

    React.useEffect(() => {
        if (beginningSearch) {
            setLookingFor(
                loggedInUser && beginningSearch?.lookingFor === 'Male'
                    ? 'Male'
                    : 'Female'
            );
            setReligion(beginningSearch.religion);
        }
    });

    const [formData, setFormData] = useState<SearchRequest>({
        currentPage: 1,
        pageSize: 10,
        search: {
            gender: lookingFor,
            age: {
                min: beginningSearch ? beginningSearch.ageFrom : 18,
                max: beginningSearch ? beginningSearch.ageTo : 35,
            },
            username: '',
            maritial_status: '',
            religion: religion,
            caste: '',
            sub_caste: '',
            mother_tounge: '',
            country: '',
            state: '',
            city: '',
            height: { min: 5, max: 10 },
            education: '',
            mangal: '',
        },
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const [mainKey, subKey] = name.split('.');

        if (subKey) {
            setFormData((prevData) => ({
                ...prevData,
                search: {
                    ...prevData.search,
                    [mainKey]: {
                        // ...prevData.search[mainKey as keyof SearchCriteria], below line means this
                        ...prevData.search[mainKey],
                        [subKey]: value,
                    },
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                search: {
                    ...prevData.search,
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e?.preventDefault();
        try {
            dispatch(loadingStarted(true));
            const response = await postSearchRequest(formData);
            dispatch(loadingStopped());
            // console.log('Response:', response);
            onListUpdate(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');
    const [states, setStates] = useState<{ state: string; cities: string[] }[]>(
        []
    );
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setFormData((prevData) => ({
            ...prevData,
            search: {
                ...prevData.search,
                ['country']: country,
            },
        }));
        // Find the states corresponding to the selected country
        const countryData = countriesWithStatesAndCities.find(
            (c) => c.country === country
        );
        setStates(countryData ? countryData.states : []);
        setSelectedState('');
        setCities([]);
        setSelectedCity('');
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const state = event.target.value;
        setSelectedState(state);
        setFormData((prevData) => ({
            ...prevData,
            search: {
                ...prevData.search,
                ['state']: state,
            },
        }));
        // Find the cities corresponding to the selected state
        const stateData = states.find((s) => s.state === state);
        setCities(stateData ? stateData.cities : []);
        setSelectedCity('');
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
        setFormData((prevData) => ({
            ...prevData,
            search: {
                ...prevData.search,
                ['city']: event.target.value,
            },
        }));
    };

    React.useEffect(() => {
        if (beginningSearch) {
            handleSubmit(undefined);
            setBeginningSearch(undefined);
        }
    });

    return (
        <div className="w-full p-4 bg-bm-gray border border-gray-200 rounded-lg shadow-lg  advance-filter">
            <h2 className="text-xl font-semibold text-center mb-4">
                Advanced Search
            </h2>
            <hr className="border-black" />
            <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 mb-2">
                        Looking For:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.search.gender === 'Male'}
                                onChange={handleInputChange}
                                className="form-radio"
                            />
                            <span>Groom</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.search.gender === 'Female'}
                                onChange={handleInputChange}
                                className="form-radio"
                            />
                            <span>Bride</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Age:</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="From"
                            name="age.min"
                            value={formData.search.age.min}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="To"
                            name="age.max"
                            value={formData.search.age.max}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Member Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Member Name"
                        name="username"
                        value={formData.search.username}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Marital Status:
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="maritial_status"
                        value={formData.search.maritial_status}
                        onChange={handleInputChange}
                    >
                        <option value={null}>Select</option>
                        {MARITAL_STATUS.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Religion:
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="religion"
                        value={formData.search.religion}
                        onChange={handleInputChange}
                    >
                        <option value={null}>Select</option>
                        {RELIGION.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Caste:</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="caste"
                        value={formData.search.caste}
                        onChange={handleInputChange}
                    >
                        <option value={null}>Select</option>
                        {SUB_CASTE.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                {/*
                <div>
                    <label>
                        Sub Caste:
                        <input
                            type="text"
                            name="sub_caste"
                            value={formData.search.sub_caste}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                */}

                <div>
                    <label className="block text-gray-700 mb-2">
                        Mother Tongue:
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="mother_tounge"
                        value={formData.search.mother_tounge}
                        onChange={handleInputChange}
                    >
                        <option value={null}>Select</option>
                        {LANGUAGES.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="block text-gray-700 mb-2"
                    >
                        Country:
                    </label>
                    <select
                        id="country"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    >
                        <option value={null}>Select</option>
                        {countriesWithStatesAndCities.map((countryData) => (
                            <option
                                key={countryData.country}
                                value={countryData.country}
                            >
                                {countryData.country}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="state" className="block text-gray-700 mb-2">
                        State:
                    </label>
                    <select
                        id="state"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        disabled={!selectedCountry}
                    >
                        <option value={null}>Select</option>
                        {states.map((stateData) => (
                            <option
                                key={stateData.state}
                                value={stateData.state}
                            >
                                {stateData.state}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">
                        City:
                    </label>
                    <select
                        id="city"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="city"
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedState}
                    >
                        <option value={null}>Select</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Height:</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            name="height.min"
                            value={formData.search.height.min}
                            onChange={handleInputChange}
                            placeholder="Min"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="number"
                            name="height.max"
                            value={formData.search.height.max}
                            onChange={handleInputChange}
                            placeholder="Max"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Occupation:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value="">Select</option>
                        {EMPLOYED_IN.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Native Place/ Origin:
                    </label>
                    <input
                        type="text"
                        placeholder="Native Place/ Origin"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Education:
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="education"
                        value={formData.search.education}
                        onChange={handleInputChange}
                    >
                        <option value="">Select</option>
                        {EDUCATION_LEVEL.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Mangal:</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        name="mangal"
                        value={formData.search.mangal}
                        onChange={handleInputChange}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default MembersListFilter;
