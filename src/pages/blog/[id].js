import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import BlogDetail from '../../components/Blog/BlogDetail'

const BlogDetailPage = () => {
    const router = useRouter();
    const {id} = router.query;

    const [blogDetail , setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBlogDetail = () => {
        fetch(`http://127.0.0.1:8000/blog/${id}/`)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Fetching is not successful")
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setDetail(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        getBlogDetail()
    }, []);


    if (isLoading) {
        return (
            <div>
                <h4 className="text-center">Loading ....</h4>
            </div>
        )
    }

    if (blogDetail) {
        return (
            <div>
                <BlogDetail blogDetail={blogDetail}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="text-center">Error : {error}</p>
                {isLoading}
            </div>
        )
    }
};


export default BlogDetailPage;