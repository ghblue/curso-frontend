import axios from 'axios'
import { toast } from 'react-toastify';

const Post = (props) => {
    //convertendo o userId pra number
    props.userId = Number(props.userId)
    axios.post('https://jsonplaceholder.typicode.com/posts', props)
    //tratamento de erro
    .then(function (response) {
      console.log(response);
      toast.success("Post realizado com sucesso!")
    })
    .catch(function (error) {
      console.log(error);
      return toast.error("Ops! Algo deu errado!")
    })
}
export default Post;