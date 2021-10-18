import React from 'react';
import {connect} from "react-redux";

const TempScale = (props) => {
    if(props.tempScale === "celsius") {
        return (
            <h1 className="celsius">
                {props.temp_c.toFixed()}
            </h1>
        )
    } else {
        return (
            <h1  className="fahrenheit">
                {props.temp_f.toFixed()}
            </h1>
        )
    }
};

const mapStateToProps = (state) => ({
    tempScale: state.weatherData.tempScale,
    temp_c: state.weatherData.temp_c,
    temp_f: state.weatherData.temp_f
})

export default connect(mapStateToProps)(TempScale);