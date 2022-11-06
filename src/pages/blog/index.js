import React, {useState, useEffect} from 'react';
import BlogList from '../../components/Blog/BlogList';

const Index = () => {

    const messageLoading = <h3 className="text-center">Loading...</h3>;
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

    if (isLoading) {
        return (
            <div>
                <h4 className="text-center">Loading ....</h4>
            </div>
        )
    }

    if (blogData) {
        return (
            <div>
                <BlogList blogData={blogData}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="text-center">Error : {error}</p>
                {isLoading && messageLoading}
            </div>
        )
    }


};

export default Index;