import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { getPosts } from "../services/posts"



const Posts = () =>{
    const {register, handleSubmit, setValue} = useForm()
    const [originalPosts, setOriginalPosts] = useState([])
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try{
            const { data: posts } = await getPosts()
            setOriginalPosts(posts)
            setPosts(posts)
        } catch (error){
            console.log(error)
            toast.error("Ops! Algo deu errado!")
        }
    }

    useEffect(() =>{
        fetchPosts()
    }, []);

    const onSubmit = (data) =>{
        console.log("data: ", data)
        const filtredPosts = originalPosts.filter( post =>{
            return post.title.includes(data.searchText)
        })
        setPosts(filtredPosts)
        toast.success("busca realizada com sucesso!")
    }

    const refreshPostList = () =>{
        setValue("searchText", "")
        getPosts()
    }

    return (
        <div>
            <h1>Posts</h1>
            <div>
                <h3>Buscar posts</h3>
                <form onSubmit ={handleSubmit(onSubmit)}>
                    <input name ="searchText" type="text" ref={register} />
                    <input type ="submit" value="Buscar" />
                </form>
            </div>
            <button onClick={refreshPostList}>Atualizar</button>
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