
const BlogDetail = ({blog_detail}) => {
    return (
        <div>
            <div className="container mt-3">
                <h3 className="text-center">Blog Detail</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-8">
                        <h4>Title : {blog_detail.title}</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Related Post</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};


export async function getServerSideProps({params}) {

    // Fetch brand data from external API
    let blog_fetch_url = `http://127.0.0.1:8000/blog/detail/${params.slug}`;
    const blog_res = await fetch(blog_fetch_url);
    const blog_detail = await blog_res.json();

    return {
        props: {
            "blog_detail": blog_detail
        }
    }
}


export default BlogDetail;