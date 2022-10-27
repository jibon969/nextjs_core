import React, {useState, useEffect} from 'react';
import BlogList from '../../components/Blog/BlogList';


const Index = () => {
    // const getBlogData = () => {
    //     const [blog, setBlog] = useState(null);
    //
    //     fetch('http://127.0.0.1:8000/blog/')
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setBlog(data)
    //         })
    //         .catch((errors) => {
    //             console.log("Errors", errors)
    //         })
    // };
    //
    // useEffect(() => {
    //     getBlogData()
    // }, []);

    const [blogData, setBlogData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBlogList = () => {
        fetch('http://127.0.0.1:8000/blog/')
            .then((res) => {
                if (!res.ok) {
                    throw Error("Fetching is not successful")
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setBlogData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        getBlogList()
    }, []);

    return (
        <div>
            <BlogList blogData={blogData}/>
        </div>
    )
};

export default Index;