import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginService = {
    login,
    logOut,
};

function login() {
    return fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                return error;
            }
        )
}

function logOut() {
    console.log("logOut");
}
