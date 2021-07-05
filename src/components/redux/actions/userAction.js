
const saveUser=(token)=>{
    localStorage.setItem("token",token);
    return ((dispatch)=>{
        dispatch({
            type:"SAVE_USER",
            payload:token
        })
    })
}