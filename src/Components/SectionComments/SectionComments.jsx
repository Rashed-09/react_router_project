import { useLoaderData, useNavigate } from "react-router-dom";
import SectionDetails from "../SectionDetails/SectionDetails";


const SectionComments = () => {
    const section = useLoaderData();
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    // console.log(section)
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h2>In details of those comment</h2>
                <button onClick={goBack}>Back</button>
            </div>
            <div  style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap: "20px"}}>
                {
                    section.map((details, idx) => <SectionDetails key={idx} details={details}></SectionDetails>)
                }
            </div>
        </div>
    );
};

export default SectionComments;