import Link from 'next/link'

const BlogList = ({blogData}) => {
    return (
        <div>
            <div className="container mt-4">
                <h3 className="text-center">Blog</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-9"/>
                    <div className="col-md-3">
                        <div className="float-right">
                            <input type="text" placeholder="Search" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogData && blogData.results.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={data?.image}
                                         className="card-img-top"
                                         alt="Oops this is an image"
                                         width="200" height="250"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.title}</p>
                                        <div className="d-grid">
                                            <Link href={`blog/${data.slug}`}>
                                                <a className="btn btn-secondary btn-block">Read More</a>
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
                        <div className="float-end">
                            <nav aria-label="Page navigation example">
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
        </div>
    )
};

export default BlogList;