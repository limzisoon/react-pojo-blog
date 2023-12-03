import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [name,setName] = useState('mario');
    // const [blogs,setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

// const handleDelete = (id) =>{
//     const newData = data.filter(blog => blog.id !== id);
//     setData(newData);
// }





    return (  
        <div className="home">  
            {error && <div>{error}</div>}
            {isPending && <div>is loading...</div>}                
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}         
        </div>
    );
}
 
export default Home;