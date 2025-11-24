import React from "react";
import PropTypes from "prop-types";

const Home = (props) => {
    const secondsString = props.seconds.toString().padStart(6, '0');
    
    const digits = secondsString.split('');

    return (
        <div className="d-flex justify-content-center bg-dark text-white p-5 rounded shadow-lg">
            
            <div className="counter-element fs-1 m-2 p-3 rounded bg-secondary text-center">
                <i className="far fa-clock"></i> 
            </div>
            
            {digits.map((digit, index) => (
                <div 
                    key={index}
                    className="counter-element fs-1 m-2 p-3 rounded bg-secondary text-center"
                >
                    {digit}
                </div>
            ))}
        </div>
    );
};

Home.propTypes = {
    seconds: PropTypes.number.isRequired 
};

export default Home;