import {useRouter} from "next/router";

const BlogDetail = ({blogDetail}) => {
    console.log("blogDetail :", blogDetail);
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <div className="container mt-3">
                <h3 className="text-center">Blog Detail</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-8">
                        <h4>Hello</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Related Post</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};


export async function getServerSideProps(context) {
    const res = await fetch(`http://127.0.0.1:8000/blog/${context.params.slug}`);
    const blogData = await res.json();
    return {
        props: {blogData}
    }
}


export default BlogDetail;