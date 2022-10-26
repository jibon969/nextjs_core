import React, {useState, useEffect} from 'react';
import Blog from '../../components/Blog/Blog';

const getBlogData = () => {
    const [blog, setBlog] = useState(null);

    fetch('http://127.0.0.1:8000/blog/')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setBlog(data)
        })
        .catch((errors) => {
            console.log("Errors", errors)
        })
};

useEffect(() => {
    getBlogData()
}, []);

const Index = () => {
    return (
        <div>
            <Blog blog={blog} />
        </div>
    )
};

export default Index;