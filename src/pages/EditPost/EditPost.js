import styles from "./EditPost.module.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import { useFetchDocument } from "../../hooks/useFetchDocument"

const EditPost = () => {
    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")
    const { user } = useAuthValue()
    const { updateDocument, response } = useUpdateDocument("posts")
    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setImage(post.image)
            setBody(post.bory)

            const textTags = post.tagsArray.join(", ")
            setTags(textTags)
        }
    }, [post])

    const handSubmit = (e) => {
        e.preventDefault()
        setFormError("")
        //Validar URL da imagem
        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.")
        }

        //Criar Array das Tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
        //Checar todos os valores 
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!")
        }

        console.log(tagsArray);

        console.log({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            creatBy: user.displayName,
        })

        if (formError) return
        const data = {
            title,
            image,
            bory: body,
            tagsArray,
            uid: user.uid,
            creatBy: user.displayName
        }
        updateDocument(id, data)
        //Redirect to homepage
        navigate("/dashboard")

    }


    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h1>Edite sua postagem: {post.title}</h1>
                    <p>Reformule seus pensamentos</p>
                    <form onSubmit={handSubmit}>
                        <label>
                            <span>Titulo:</span>
                            <input type="text" name="title" required placeholder="Escreva o titulo da sua postagem" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input type="text" name="image" required placeholder="Insira uma imagem" onChange={(e) => setImage(e.target.value)} value={image} />
                        </label>
                        <p className={styles.preview_title}>Preview da Imagem:</p>
                        <img className={styles.image_preview} src={post.image} alt={post.title} />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea name="body" required placeholder="Escreva seus pensamentos" onChange={(e) => setBody(e.target.value)} value={body} ></textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input type="text" name="tags" required placeholder="Insira as tags" onChange={(e) => setTags(e.target.value)} value={tags} />
                        </label>
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (<button className="btn" disabled >Aguarde</button>)}
                        {response.error && (<p className="error">{response.error}</p>)}
                        {formError && (<p className="error">{formError}</p>)}

                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost