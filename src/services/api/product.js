import { baseUrl } from "..";

export const getProducts = async () => {
        const response = await fetch(`${baseUrl}/product`, {
            method: "GET",
        });
        // console.log(response)
        if(response.ok){
            return await response.json();
        }
}