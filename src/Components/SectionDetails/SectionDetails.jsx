import PropTypes from 'prop-types'
const SectionDetails = ({details}) => {
    const {postId, body, name, email} = details;
    return (
        <div style={{
            border:"1px solid tomato",
            margin: "10px",
            padding: "10px",
            borderRadius: "20px"
        }}>
            <h3>Id: {postId}</h3>
            <h3>Email: {email}</h3>
            <p>name: {name}</p>
            <p>Read More: {body}</p>
        </div>
    );
};




SectionDetails.propTypes = {
    details: PropTypes.object
}
export default SectionDetails;