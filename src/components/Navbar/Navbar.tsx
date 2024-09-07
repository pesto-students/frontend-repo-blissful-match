import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'flowbite';
import logo from '@assets/logo.png';
import user_placeholder from '@assets/images/user-placeholder.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { loggedInUser } from '@store/LoggedInUser/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '@store/LoggedInUser/reducer';

// import { IsUserLoggedIn, LoggedInUserInfo } from '@utils/user';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [showUserDropdown, setShowUserDropdown] = React.useState(false);
    const navigate = useNavigate();
    const info = useSelector(loggedInUser);
    const dispatch = useDispatch();
    console.log(info);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/"
                        className="flex items-start space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logo}
                            className="h-10"
                            alt="Blissful Match Logo"
                        />
                    </NavLink>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        {info !== null && info !== undefined ? (
                            <>
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                    onClick={() =>
                                        setShowUserDropdown(!showUserDropdown)
                                    }
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={user_placeholder}
                                        alt="user photo"
                                    />
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="user-dropdown"
                                    className={`z-50 ${
                                        showUserDropdown ? 'block' : 'hidden'
                                    } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow z-10`}
                                    style={{
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform:
                                            'translate3d(1232.8px, 62.4px, 0px)',
                                    }}
                                >
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900">
                                            {`${info.first_name} ${info.last_name}`}
                                        </span>
                                        <span className="block text-sm  text-gray-500 truncate">
                                            {info.email_address}
                                        </span>
                                    </div>
                                    <ul
                                        className="py-2"
                                        aria-labelledby="user-menu-button"
                                    >
                                        <li>
                                            <NavLink
                                                to="/my-profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                My Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/change-password"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Change Password
                                            </NavLink>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => {
                                                    dispatch(logOut());
                                                    navigate('login');
                                                }}
                                            >
                                                Log out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            ''
                        )}

                        {/* Mobile menu button */}
                        <button
                            className="text-gray-500 md:hidden"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                    <div
                        className={`${
                            isMobileMenuOpen ? 'block' : 'hidden'
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-0 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/members"
                                >
                                    Find Match
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/packages"
                                >
                                    Our Packages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            {info === null || info === undefined ? (
                                <li>
                                    <NavLink
                                        className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            ) : (
                                ''
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
