import { useEffect, useState } from "react"

const useToken =(email)=>{
    const [token, setToken] = useState()

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accesstokan){
                localStorage.setItem('token', data.accesstokan)
                setToken(data.accesstokan)
            }
        })
        .catch(e => console.error(e))
        }
      
    },[email])

    return [token]
}

export default useToken