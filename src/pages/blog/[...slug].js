import Image from 'next/image'
import blogImage from '/public/image/best-programming-blogs.jpg'

const BlogDetail = ({blog_detail}) => {

    return (
        <div>
            <div className="container mt-3">
                <h3 className="text-center">Blog Detail</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-8">
                        {
                            blog_detail.image ?
                                <img src={blog_detail.image} alt="Oops image is missing" width={850} height={450} />
                                :
                                <Image
                                    src={blogImage}
                                    fill
                                    sizes="(max-width: 768px) 100vw, max-width: 1200px) 50vw, 33vw"
                                />
                        }
                        <h4 className="my-3">{blog_detail.title}</h4>
                        <p className="my-3">{blog_detail.description}</p>
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