export function LoggedInUserInfo() {
    return localStorage.getItem('user');
}

export function IsUserLoggedIn() {
    return localStorage.getItem('user') && localStorage.getItem('token');
}
