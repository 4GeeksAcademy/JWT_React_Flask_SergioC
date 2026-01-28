import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Private = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate("/")
        }
    },[])


    return(
        <>
        Zona privadaa
        </>
    )
}