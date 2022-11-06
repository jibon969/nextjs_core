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
                            style={{width:"100%", height:450}}
                        />
                        <p>{blogDetail?.category?.name}</p>
                        <p>{blogDetail?.description}</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Related Post</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogDetail;