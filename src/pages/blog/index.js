import Blog from '../../components/Blog/Blog'

const BlogPage = ({posts}) => {
    console.log("Post:", posts);
    return (
        <div>
            <Blog posts={posts} />
        </div>
    )
};


export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:8000/blog/');
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    }
}


export default BlogPage;