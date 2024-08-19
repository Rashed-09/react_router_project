import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Comment = ({comment}) => {
    // console.log(comment)
    const {body, email, postId, name} = comment;
    return (
        <div style={{
            border:"1px solid tomato",
            margin: "10px",
            padding: "10px",
            borderRadius: "20px"

        }}>
            <h2>{name}</h2>
            <p>Contact with email: {email} </p>
            <p>Learn More About us {body}</p>
            <div>
                <button><Link to={`/section/${postId}`}>more</Link></button>
            </div>
        </div>
    );
};
 


Comment.propTypes = {
    comment: PropTypes.object
}
export default Comment;