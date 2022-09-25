import React from "react";
import BlogDetail from '../../components/Blog/BlogDetails'

const BlogDetailPage = ({blogDetail}) => {
    return(
        <div>
            <BlogDetail blogDetail={blogDetail} />
        </div>
    )

};

export async function getServerSideProps(context) {
    const blog = `http://127.0.0.1:8000/blog/${context.params.id}/`;
    return {
        props: {
            blogDetail,
        },
    };
}

export default BlogDetailPage;
