import Link from 'next/link'
import Image from 'next/image'


const Blog = ({data}) => {
    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center">Blog</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-9"/>
                    <div className="col-md-3 mb-3">
                        <div className="search">
                            <form action="#">
                                <input type="text" placeholder="Search Here ..." className="form-control" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data && data.results?.map((post) => (
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={post.image} style={{width: "100%", height: 250}} className="img-responsive"/>
                                    <div className="card-body">
                                        <h5>{post.title}</h5>
                                        <p>{post.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="text-center">
                                            <Link href={`blog/${post.id}`}>
                                                <a>More Details</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="row">
                    <div className="col">
                        <nav aria-label="Page navigation example" style={{float: "right"}}>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;