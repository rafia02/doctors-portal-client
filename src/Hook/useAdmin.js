import { useEffect, useState } from "react"

const useAdmin =(email)=>{
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsAdmin(data.isAdmin)
        })
        .catch(e => console.error(e))
    },[email])

    return [isAdmin]
}

export default useAdmin