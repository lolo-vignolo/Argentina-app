import { useRouter } from "next/router";


async function newUser ( email, password) {

    const router = useRouter()
    
    const response = await fetch("/api/auth/signup", {
        method:"POST",
        body: JSON.stringify({email, password}),
        headers:{
            "Content-Type": "application/json"
        }
    });


    const data = await response.json()

    if(!response.ok){
        throw Error(data.message || "Something went wrong")
    }else{
        router.replace("/home")
    }
    return data;
}

export default newUser;