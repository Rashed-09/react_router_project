import {  useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Home = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>All Country of World</h3>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px"}}>
                {
                    countries.map((country, idx) => <Country key={idx} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;