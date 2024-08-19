import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData()
    // console.log(comments)
    return (
        <div>
            <h3>Our Comments</h3>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: "20px"}}>
                {
                    comments.map((comment, idx) => <Comment key={idx} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;