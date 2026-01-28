export const BACEND_URL = import.meta.env.VITE_BACKEND_URL + "/api/"

export const createUser = async(formData) => {
    const response = await fetch(BACEND_URL + "signup",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    const data = await response.json()
    
    return data
}