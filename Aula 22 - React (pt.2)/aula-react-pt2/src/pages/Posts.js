import { useEffect, useState } from "react";
import axios from 'axios'

const Posts = () =>{
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('post list: ', posts)
        setPosts(posts)
    }

    useEffect(() =>{
        getPosts()
    }, []);

    if(posts.length === 0){
        return <h1>Posts</h1>
    }

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={getPosts}>Atualizar</button>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>  
                    </div> 
                )
            })}
        </div>
    )
}
export default Posts;