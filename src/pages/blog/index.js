import React, {useState, useEffect} from 'react';

const getBlogData = () => {
    const [data, setData] = useState(null);

    fetch('http://127.0.0.1:8000/blog/')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
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
            <h3>Hello</h3>
        </div>
    )
};

export default Index;