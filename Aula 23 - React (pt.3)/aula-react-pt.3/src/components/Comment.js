import styles from '../styles/Comment.module.css'
const Comment = ({email: email, name: name, body: body}) =>{

    return(
        <div className = {styles.container}>
                    <div>
                        <h2>User</h2>
                        <h3>email: {email}</h3>
                        <h3>name: {name}</h3>
                        <h2>Comment: </h2> 
                        <p>{body}</p>
                    </div>
            )
        </div>
        )
    }
export default Comment;