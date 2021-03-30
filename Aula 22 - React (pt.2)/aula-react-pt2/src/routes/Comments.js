import { useEffect, useState } from 'react';
import axios from 'axios'
import Comment from '../components/Comment'
import styles from '../styles/Comments.module.css'

const Comments = () =>{
    const [comments, setComments] = useState([])

    useEffect(() =>{
        const getComments = async () => {
            const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments')
            console.log('comments list: ', comments)
            setComments(comments)
        }
        getComments();
    }, [])

    if(comments.length === 0){
        return <h1>Comments</h1>
    }

    return(
        <div className = {styles.container}>
        <h1>Comments</h1>
        {comments.map((comment) => {
            return <Comment key={comment.id} email = {comment.email} name = {comment.name} body = {comment.body} />
        })}
        </div>
    )
}

export default Comments;