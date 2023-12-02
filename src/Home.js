import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
            {title:'my website',body:'xxxxxxxx',author:'mario',id:1},
            {title:'welcome party',body:'xxxxxxxx',author:'yashi',id:2},
            {title:'web dev top tips',body:'xxxxxxxx',author:'luigi',id:3}
        ]);
/*
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

    return (  
        <div className="home">                  
           <BlogList blogs={blogs} title="All Blogs"/>       
        </div>
    );
}
 
export default Home;