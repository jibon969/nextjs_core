import React from 'react';
import BlogList from '../../components/Blog/BlogList';

const Index = ({blogData}) => {

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
                <p className="text-center">No Data Found !</p>
            </div>
        )
    }

    export async function getServerSideProps() {
        const res = await fetch(`http://127.0.0.1:8000/blog/`);
        const blogData = await res.json();
        return {props: {blogData}}
    }

};

export default Index;