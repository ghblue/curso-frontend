import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CreateDiv, CreateTitleh1} from '../styles/CreatePost'
import { NewTextField, CreateBody, CreateTitle, ButtonOrganization, ButtonCreate, ButtonCancel } from '../styles/Form';
import { putPost } from "../services/posts";
import { getPostsList, deletePost } from "../services/posts";
import "../styles/style.css";

const ListPosts = () => {

  const [post, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const { register, handleSubmit } = useForm();

  const handleDelete = async (open) => {
    try {
      await deletePost(open);
      toast.success("Post deletado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpen(false);
    }
  };

  const handleOpenModalDelete = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleEdit = (item) =>{
    setSelectedItem(item);
    setEdit(true);
  }
  
  const handleChangeValue = () =>{
    setOpen(false);
  }
  const handleChangeValueEdit = () =>{
     setEdit(false);
  }

  const onSubmit = async (data) => {
    const carryId = selectedItem;
    try {
      if(data.title === "" || data.body === "") return toast.error("Oops!! algum dos dois campos está vazio. Preencha os dois campos e tente novamente");
      await putPost(data, carryId)
      handleChangeValueEdit();
      toast.success("Post atualizado com sucesso!!");
    } catch {
      toast.error("Oops!! Houve um problema com a atualização do post");
    }
  }

  useEffect(() => {
    const handleGetPosts = async () => {
      const response = await getPostsList();
      setPosts(response.data);
      toast.success("Listagem de posts foi carregada com sucesso!!");
    };
    handleGetPosts();
  }, []);

  return (
    <>
      <div className="card">
        {post.map((item) => (
          <div className="card-item" key={item.id}>
            <div>
              <p className="title">{item.title}</p>
              <p className="text">{item.body}</p>
            </div>
            <div>
              <button className="info"
              onClick={() => handleEdit(item)}>Editar Post</button>
              <button
                className="error"
                onClick={() => handleOpenModalDelete(item)  }
              >
                Excluir Post
              </button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className="modal">
          <p>Realmente deseja excluir essa postagem?</p>
          <div>
            <p>{selectedItem.title}</p>
            <p>{selectedItem.body}</p>
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleDelete(selectedItem)}
            >
              Excluir
            </button>
            <button className="cancel" onClick={handleChangeValue}>cancelar</button>
          </div>
        </div>
      )}
      {openEdit && (
        <CreateDiv className="modalEdit">
          <CreateTitleh1>Editar uma publicação</CreateTitleh1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CreateTitle>Título</CreateTitle>
                <NewTextField 
                    id="outlined-search"
                    size="small"
                    type="search"
                    variant="outlined"
                    placeholder={selectedItem.title}
                    inputProps = {{ref: register, name: "title"} } 
                />
                <CreateBody>Descrição</CreateBody>
                <NewTextField 
                    id="outlined-search"
                    size="small"
                    type="search"
                    variant="outlined"
                    placeholder={selectedItem.body}
                    inputProps = {{ref: register, name: "body"} } 
                  />
                <ButtonOrganization className="m-top-25">
                  <ButtonCreate
                   variant="contained" type="submit" color="primary"
                   >
                  Salvar
                  </ButtonCreate>
                  <ButtonCancel
                   variant="contained" name="create" 
                   onClick={handleChangeValueEdit} >
                    Cancelar
                  </ButtonCancel>
                </ButtonOrganization>
            </form>
          </div>
        </CreateDiv>
      )}

    </>
  );
};

export default ListPosts;
