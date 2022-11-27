export const setAuthToken=user=>{
const currentUser={
    email:user.email,
}

fetch(`http://localhost:5000/user/${user.email}`,{

    method:'PUT',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(currentUser)
}).then(res=>res.json()).then(data=>{
    
        localStorage.setItem('token',data.token)
})







}

