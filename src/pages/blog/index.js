import React from 'react';
import BlogList from '../../components/Blog/BlogList';

const BlogPage = ({blogData}) => {

    return (
        <div>
            <BlogList blogData={blogData}/>
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch Api
    const res = await fetch(`http://127.0.0.1:7000/blog/`);
    const blogData = await res.json();
    return {props: {blogData}}
}

export default BlogPage;