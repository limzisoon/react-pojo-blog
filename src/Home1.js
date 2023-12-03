import { useState } from "react";

const Home1 = () => {


    //let name = 'mario';
    const [name,setName] = useState('mario');   //react hook, useState

    const [age,setAge] = useState(25);

    const handleClick = (e) => {
        //name = 'luigi';
        setName('luigi');
        setAge(30);
        console.log('hellow ninja '+name,e.tar);
    }

    const handleClickAgain = (name) =>{
        console.log('hello '+name);
    }
    const handleClickAgain2 = (name,e) =>{
        console.log('hello '+name,e.target);
    }
    return (  
        <div className="home"> 
            <h2>Homepage</h2>
            <p>{name}</p>
            <p> {name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>{handleClickAgain('mario')}}>Click Me Again</button>
            <button onClick={(e)=>{handleClickAgain2('mario',e)}}>Click Me Again 2</button>
        </div>

    );
}
 
export default Home1;