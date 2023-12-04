import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home2 = () => {
  
    const [name,setName] = useState('mario');
    const [blogs,setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
/*
    const [blogs,setBlogs] = useState([
            {title:'my website',body:'xxxxxxxx',author:'mario',id:1},
            {title:'welcome party',body:'xxxxxxxx',author:'yashi',id:2},
            {title:'web dev top tips',body:'xxxxxxxx',author:'mario',id:3}
        ]);

    return (  
       <div className="home">                  
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}        
       </div>
    );
*/    

const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

// useEffect(()=>{
//     console.log('use effect ran');
//     console.log(blogs);
// });

useEffect(()=>{
/*
    console.log('use effect ran');
    console.log(blogs);
    console.log(name);
*/
    setTimeout(()=>{

        fetch('http://localhost:8000/blogss')
            .then(res=>{
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for the resource');
                }
                return res.json();
            })
            .then(data=>{
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err=>{
                console.log(err.message);
            });

    },1000);
  
},[]);

    return (  
        <div className="home">  
            {isPending && <div>is loading...</div>}                
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}      
           {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's blogs"/>}  
           <button onClick={()=>{setName('luigi')}}>change name</button> 
           <p>{name}</p>
        </div>
    );
}
 
export default Home2;