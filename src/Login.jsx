import React, { useState } from "react";
import './App.css';


const Login = () => {
   
// const [userName, setUsername]=useState('')
// const [password, setPassword]=useState('')

// console.log(userName,'');
// console.log(password,'');
const state = useState();dfmskl

// const [count , setCount] =useState(0);
// const IncNum=()=>{
//     setCount(count + 1);


    // let newTime = new Date().toLocaleTimeString();

    // const[ctime , setCtime] = useState(newTime);
    
    // const updateTime=()=>{
    //     newTime = new Date().toLocaleTimeString();
    //     setCtime(newTime);


    let time = new Date().toLocaleTimeString();

    const [nowtime, setNowtime]= useState(time);
    
   const updateTime=()=>{
    time = new Date().toLocaleTimeString();
    setNowtime(time);
    setInterval(updateTime, 1000)
   }

    return (
        <>
        {/* <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button> */}


        {/* <h1>{ctime}</h1>

        <button onClick={updateTime}>Get Time</button>

        <span>
      {date.toLocaleTimeString()}
    </span> */}

            {/* <h2>Login Form</h2>

            <form>
                <div class="imgcontainer">
                    <img src="\Assets\Img\img_avatar.png" alt="Avatar" class="avatar"/>
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="userName" value={userName} onChange={(e)=>setUsername(e.target.value)}  required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value)} required />

                    <button onClick={()=>{ alert('Please fill out this Field'); }}>Login</button>

                    <label>
                        <input type="checkbox" name="remember"/> Remember me
                    </label>
                </div>

                <div class="container" >
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>

            </form> */}
            
            <h1>{nowtime}</h1>
           
            
            
        </>
    )


}


export default Login;





