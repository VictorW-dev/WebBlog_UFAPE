import styles from './Post.module.css';

//hooks 
import { useParams } from 'react-router-dom';

const Post = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>Post {id}</h2>
        </div>
    );
};

export default Post;