import React from "react";
import BlogDetail from '../../components/Blog/BlogDetails'

const BlogDetailPage = () => {
    return(
        <div>
            <BlogDetail/>
        </div>
    )

};

export async function getServerSideProps(context) {
    const response = `http://127.0.0.1:8000/blog/${context.params.id}/`;
    const about_blog =  response.data;
    console.log("about Data :", about_blog);

    return {
        props: {

        },
    };
}

export default BlogDetailPage;
