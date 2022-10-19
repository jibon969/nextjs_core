import React, {useState, useEffect} from 'react';

import Blog from '../../components/Blog/Blog'


const BlogPage = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/blog/`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <Blog data={data}/>
        </div>
    )
};


export default BlogPage;