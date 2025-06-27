import { baseUrl } from "../index"


export const token = localStorage.getItem("auth-token");


export const getCart = async () => {
    const response = await fetch(`${baseUrl}/carts`, {
        method: "GET",
        headers: {
            "auth-token": token,
            "Content-Type": "application/json",
        },
    })
    // console.log(response)
    if(response.ok){
        return await response.json()
    }
}

export const createCart = async (data) => {
    const response = await fetch(`${baseUrl}/add-to-cart`, {
        method: "POST",
        headers: {
            "auth-token":  token,
            "Content-Type": "application/json"
        },
        // body: JSON.stringify(data)
        body: JSON.stringify(data)
    })
    console.log(response)
    if(response.ok){
        return await response.json()
    }
}

export const updateCart = async (productId, quantity) => {
    const response = await fetch(`${baseUrl}/update-cart`, {
        method: "PUT",
        headers: {
            "auth-token":  token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity })
    })
    // console.log(response)
    if(response.ok){
        return await response.json()
    }
}
export const removeCart = async (productId) => {
    const response = await fetch(`${baseUrl}/delete-cart`, {
        method: "DELETE",
        headers: {
            "auth-token":  token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
    })
    // console.log(response)
    if(response.ok){
        return await response.json()
    }
}

