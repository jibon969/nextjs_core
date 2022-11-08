import Image from 'next/image'

const BlogDetail = ({blogDetail}) => {

    return (
        <div>
            <div className="container mt-3">
                <h3 className="text-center">Blog Detail</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="text-center">{blogDetail?.title}</h4>
                        <img
                            src={blogDetail?.image}
                            alt='User profile picture'
                            style={{width: "100%", height: 450}}
                        />
                        <p>{blogDetail?.category?.name}</p>
                        <p>{blogDetail?.description}</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Related Post</h4>
                        <hr/>
                        <div className="relatedPost">
                            <div className="row">
                                <div className="col-md-3">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/21084550?v=4"
                                        alt="Picture of the author"
                                        width={90}
                                        height={90}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <h6>Blog Title</h6>
                                    <p>Category Name</p>
                                    <p>3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogDetail;