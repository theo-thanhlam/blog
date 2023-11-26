import { useEffect, useState } from "react";
import Post from "../components/post";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async function () {
           const response = await fetch("http://localhost:3001/post").then(res => res.json());
           setPosts(response); // Update the state with fetched posts
           
        }

        fetchPosts();
    }, [])

    return(
       <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
       </>
    );
}

export default IndexPage;
