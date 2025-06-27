import { baseUrl } from "../index";


export const createUser = async(registerData) => {
    const response = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(registerData)
    });
    console.log(response)
    if(response.ok){
        return await response.json();
    }
}

export const loginUser = async(loginData) => {
    const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(loginData)
    });
    if(response.ok){
        return await response.json();
    }

}