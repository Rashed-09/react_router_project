import {  Link, useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
    const country = useLoaderData();
    const navigate = useNavigate()
    const singleObject = country[0];
    console.log(singleObject)
    const {name, capital, area, population, flags} = singleObject;
    const goBack = () => {
        navigate(-1)
    }

    const countryStyle = {
        margin: "10px",
        padding: "15px",
        border: "1px solid green",
        borderRadius: "15px",
    }
    return (
        <div style={countryStyle}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button><Link to={"/"}>Home</Link></button>
                <button onClick={goBack}>Back</button>
            </div>
            <img style={{width: "100px"}} src={flags.png} alt="" />
            <h2>Country Name: <span style={{color:"tomato"}}>{name.common}</span></h2>
            <h3>Capital: {capital}</h3>
            <p>Area : {area}</p>
            <p>Population {population}</p>
        </div>
    );
};

export default Details;