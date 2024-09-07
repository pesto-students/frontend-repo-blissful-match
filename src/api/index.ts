import axios from 'axios';
import {
    LoginRequest,
    RegisterRequest,
    ForgetPasswordRequest,
    VerifyOtpRequest,
    ResetPasswordRequest,
    GenerateOrder,
    GenerateOrderResponse,
    SearchRequest,
    SubscriptionPlan,
    VerifySignatureRequest,
} from './models';
import { MapUserProfilesToProfiles } from './mapper';

// Example usage

const loginURL = `${process.env['REACT_APP_API_ROOT_URL']}user/login`;
const getMemberSearchListURL = `${process.env['REACT_APP_API_ROOT_URL']}user/members`;
const getPlansURL = `${process.env['REACT_APP_API_ROOT_URL']}plans/get-plans`;
const generateOrderURL = `${process.env['REACT_APP_API_ROOT_URL']}payment/generate-order`;
const verifySignatureURL = `${process.env['REACT_APP_API_ROOT_URL']}payment/generate-order`;
const getShortListedUserURL = `${process.env['REACT_APP_API_ROOT_URL']}user/get-shortlist-users`;
const getProfileURL = `${process.env['REACT_APP_API_ROOT_URL']}user/get-my-profile`;
const getMembersProfileURL = `${process.env['REACT_APP_API_ROOT_URL']}user/get-member-profile`;
const getViewHistoryURL = `${process.env['REACT_APP_API_ROOT_URL']}user/my-viewed-history`;
const addToShortListURL = `${process.env['REACT_APP_API_ROOT_URL']}user/add-shortlist`;
const removeFromShortListURL = `${process.env['REACT_APP_API_ROOT_URL']}user/remove-shortlist`;
const registerUrl = `${process.env['REACT_APP_API_ROOT_URL']}user/register`;
const forgetPasswordUrl = `${process.env['REACT_APP_API_ROOT_URL']}user/forgot-password`;
const verifyOtpUrl = `${process.env['REACT_APP_API_ROOT_URL']}user/verify-otp`;
const resetPasswordUrl = `${process.env['REACT_APP_API_ROOT_URL']}user/update-password`;

const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: process.env['REACT_APP_API_TOKEN'],
};

function GetDefaultHeaders() {
    if (localStorage.getItem('token')) {
        return {
            ...defaultHeaders,
            Authorization: localStorage.getItem('token'),
        };
    }

    return defaultHeaders;
}

export async function postSearchRequest(
    payload: SearchRequest,
    url: string = getMemberSearchListURL
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        // console.log('Response:', response.data);

        return MapUserProfilesToProfiles(response.data.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getShortListedUser(
    payload: { pageSize: number; pageNumber: number },
    url: string = getShortListedUserURL
) {
    try {
        const response = await axios.get(
            `${url}?pageNumber=${payload.pageNumber}&pageSize=${payload.pageSize}`,
            {
                headers: GetDefaultHeaders(),
            }
        );

        if (response.data.data) {
            return MapUserProfilesToProfiles(response.data.data);
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getMembersProfile(
    userId: string,
    url: string = getMembersProfileURL
) {
    try {
        const response = await axios.get(`${url}??user_id=${userId}`, {
            headers: GetDefaultHeaders(),
        });

        if (response.data.data) {
            return response.data.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getMyProfile(url: string = getProfileURL) {
    try {
        const response = await axios.get(`${url}`, {
            headers: GetDefaultHeaders(),
        });

        if (response.data.data) {
            return response.data.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getPlans(url: string = getPlansURL) {
    try {
        const response = await axios.get(`${url}`, {
            headers: GetDefaultHeaders(),
        });

        if (response.data?.data) {
            return JSON.parse(
                JSON.stringify(response.data.data)
            ) as Array<SubscriptionPlan>;
        } else {
            return [] as Array<SubscriptionPlan>;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function createOrder(
    payload: GenerateOrder,
    url: string = generateOrderURL
) {
    try {
        const response = await axios.post(`${url}`, payload, {
            headers: GetDefaultHeaders(),
        });

        if (response.data) {
            return JSON.parse(
                JSON.stringify(response.data)
            ) as GenerateOrderResponse;
        } else {
            return {} as GenerateOrderResponse;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function verifySignature(
    payload: VerifySignatureRequest,
    url: string = verifySignatureURL
) {
    try {
        const response = await axios.post(`${url}`, payload, {
            headers: GetDefaultHeaders(),
        });

        if (response.data) {
            return JSON.parse(
                JSON.stringify(response.data)
            ) as GenerateOrderResponse;
        } else {
            return {} as GenerateOrderResponse;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getViewHistory(
    payload: { pageSize: number; pageNumber: number },
    url: string = getViewHistoryURL
) {
    try {
        const response = await axios.get(
            `${url}?pageNumber=${payload.pageNumber}&pageSize=${payload.pageSize}`,
            {
                headers: GetDefaultHeaders(),
            }
        );

        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function addToShortList(
    payload: { receiverId: string },
    url: string = addToShortListURL
): Promise<boolean> {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function removeFromShortList(
    payload: { receiverId: string },
    url: string = removeFromShortListURL
): Promise<boolean> {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function loginUserRequest(
    payload: LoginRequest,
    url: string = loginURL
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        // console.log('Response:', response.data);
        if (response.data.token) {
            // localStorage.setItem('token', response.data.token);
            // localStorage.setItem('user', {
            //     ...response.data.user,
            //     password: undefined,
            // });
            return response.data;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function registerUserRequest(
    payload: RegisterRequest,
    url: string = registerUrl
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        console.log('Response:', response.data.data);
        //return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function ForgetPasswordUserRequest(
    payload: ForgetPasswordRequest,
    url: string = forgetPasswordUrl
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        console.log('Response:', response.data.data);
        //return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function VerifyOtpUserRequest(
    payload: VerifyOtpRequest,
    url: string = verifyOtpUrl
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        console.log('Response:', response.data.data);
        //return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function ResetPasswordUserRequest(
    payload: ResetPasswordRequest,
    url: string = resetPasswordUrl
) {
    try {
        const response = await axios.post(url, payload, {
            headers: GetDefaultHeaders(),
        });

        console.log('Response:', response.data.data);
        //return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}
