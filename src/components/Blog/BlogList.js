import Link from 'next/link'

const BlogList = ({blogData}) => {
    return (
        <div>
            <div className="container mt-4">
                <h3 className="text-center">Blog</h3>
                <hr/>
                <div className="row">
                    {
                        blogData && blogData.results.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={data?.image} className="card-img-top" alt="Oops this is an image"
                                         width="200" height="250"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.title}</p>
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-secondary btn-block">Read More</button>
                                        </div>
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