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
                        <div className="blog-detail">
                            {
                                blog_detail.image ?
                                    <img src={blog_detail.image} alt="Oops image is missing" width={750} height={450}/>
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
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="d-flex flex-start align-items-center">
                                    <div>
                                        <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                                        <p className="text-muted small mb-0">
                                            Shared publicly - Jan 2020
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-3 mb-4 pb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    consequat.
                                </p>

                                <div className="small d-flex justify-content-start">
                                    <a href="#" className="d-flex align-items-center me-3">
                                        <i className="far fa-thumbs-up me-2"/>
                                        <p className="mb-0">Like</p>
                                    </a>
                                    <a href="#" className="d-flex align-items-center me-3">
                                        <i className="far fa-comment-dots me-2"/>
                                        <p className="mb-0">Comment</p>
                                    </a>
                                    <a href="#" className="d-flex align-items-center me-3">
                                        <i className="fas fa-share me-2"/>
                                        <p className="mb-0">Share</p>
                                    </a>
                                </div>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="d-flex flex-start w-100">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                         alt="avatar" width="40"
                                         height="40"/>
                                    <div className="form-outline w-100">
                                                            <textarea
                                                                className="form-control"
                                                                id="textAreaExample" rows="4"
                                                            />
                                        <label
                                            className="form-label"
                                            htmlFor="textAreaExample">
                                            Message
                                        </label>
                                    </div>
                                </div>
                                <div className="float-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm">
                                        Post comment
                                    </button>
                                </div>
                            </div>
                        </div>
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