import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name, flags, cca3} = country;
    // console.log(country)


    const countryStyle = {
        margin: "10px",
        padding: "15px",
        border: "1px solid green",
        borderRadius: "15px",
    }
    return (
        <div style={countryStyle}>
            <img src={flags.png} alt="" />
            <h2><span>{name.common}</span></h2>
            <Link to={`/details/${cca3}`}>Details</Link>

        </div>
    );
};


Country.propTypes = {
    country: PropTypes.object
}
export default Country;