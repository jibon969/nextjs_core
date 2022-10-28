const BlogList = ({blogData}) => {

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {
                        blogData && blogData((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src="" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.title}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
};

export default BlogList;