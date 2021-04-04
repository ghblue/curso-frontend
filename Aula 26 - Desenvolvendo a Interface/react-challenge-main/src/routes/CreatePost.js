import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { CreateDiv, CreateTitleh1 } from '../styles/CreatePost'

import Form from "../components/Form";

import { createPost } from "../services/posts";

import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      if(data.title === "" || data.body === "") return toast.error("Oops!! algum dos dois campos está vazio. Preencha os dois campos e tente novamente");
      await createPost(data)
      toast.success("Post criado com sucesso!!");
      history.push("/list-posts");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };
  return (
    <CreateDiv>
      <CreateTitleh1>Criar uma publicação</CreateTitleh1>
      <Form func={onSubmit} />
    </CreateDiv>
  );
};

export default CreatePost;
