
import { baseUrl } from "../index"


export const token = localStorage.getItem("auth-token");


export const initiatePayment = async (data) => {
    const response = await fetch(`${baseUrl}/initite-payment`, {
        method: "POST",
        headers: {
            "auth-token":  token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    console.log(response)
    if(response.ok){
        return await response.json()
    }
}
export const verifyPayment = async (data) => {
    const response = await fetch(`${baseUrl}/verify-payment`, {
        method: "POST",
        headers: {
            "auth-token":  token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    console.log("res",response)
    if(response.ok){
        return await response.json()
    }
}
