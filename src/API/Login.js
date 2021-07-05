export const signup = (user,password)=>{
    console.log("!!",user,password);
      return   fetch(`http://localhost:3000/signup?user=${user}?password=${password}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });

}
