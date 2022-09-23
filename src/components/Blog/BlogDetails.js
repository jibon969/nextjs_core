import Link from 'next/link'
import Image from 'next/image'

const BlogDetails = () => {
    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center">Blog Details</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <div className="detail mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src="https://images.indianexpress.com/2021/05/Google-IO-2021_1.jpg"
                                        style={{width: "100%", height: "400"}}
                                        className="img-responsive"
                                    />
                                    <h4 className="my-4">Google I/O 2021: Android 12 to Pixel 5A, everything that is
                                        expected</h4>
                                    <p className="text-justify">
                                        Yes, in some circumstances, it is possible to use a copyright-protected work
                                        without
                                        infringing the owner’s copyright. For more about this, you may wish to learn
                                        about fair
                                        use.
                                        It is important to note that your content can be removed in response to a claim
                                        of
                                        copyright
                                        infringement, even if you have...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="replay mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="comment-box mb-3">
                                        <div className="d-flex flex-start align-items-center">
                                            <img className="rounded-circle shadow-1-strong me-3"
                                                 src="https://media-exp1.licdn.com/dms/image/C4D03AQEqoWKMYX8wVQ/profile-displayphoto-shrink_200_200/0/1517033034646?e=2147483647&v=beta&t=-LiwA5jtu7YXeCyGSkrCH_YNQ3bxkDS7htsB6UBkzhM"
                                                 alt="avatar" width="60"
                                                 height="60"/>
                                            <div>
                                                <h6 className="fw-bold text-primary mb-1">
                                                    Jibon Ahmed
                                                </h6>
                                                <p className="text-muted small mb-0">
                                                    Shared publicly - Jan 2020
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-4 pb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, molestias!
                                        </p>
                                    </div>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <form action="#">
                                        <div className="form-group mt-2">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <input type="text" placeholder="Name *" className="form-control"/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input type="email" placeholder="E-mail" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Message"
                                                rows="4"
                                            />
                                        </div>
                                        <div className="float-end mt-2 pt-1">
                                            <button type="button" className="btn btn-primary btn-sm mx-1">
                                                Post comment
                                            </button>
                                            <button type="button" className="btn btn-outline-primary btn-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card mb-4">
                            <h4 className="card-header">Related Post</h4>
                            <div className="card-body pb-0">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/">
                                            <a>Lorem ipsum dolor sit amet.</a>
                                        </Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link href="/">
                                            <a>Lorem ipsum dolor sit amet.</a>
                                        </Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link href="/">
                                            <a>Lorem ipsum dolor sit amet.</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <h4 className="card-header">Category</h4>
                            <div className="card-body pb-0">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/">
                                            <a>SWE</a>
                                        </Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link href="/">
                                            <a>CSE</a>
                                        </Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link href="/">
                                            <a>EEE</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogDetails;