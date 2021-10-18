import React, {useEffect} from 'react';
import FavoriteCityButton from "../components/FavoriteCityButton";
import {Link, useHistory} from "react-router-dom";
import ListButton from "../components/UI/ListButton";
import CitySearch from "../components/CitySearch";
import Forecast from "../components/Forecast";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";

const CityPage = (props) => {
    const params = useParams();
    const router = useHistory();

    // Redirect to the home page if you start looking for another city
    useEffect(() => {
        if(props.location !== params.city) {
            router.push(`/SimpleWeather`);
        }
    }, [props.location])

    return (
        <div>
            <div className="app">
                <FavoriteCityButton />
                <Link to="/SimpleWeather/cities" className="app__list-button">
                    <ListButton />
                </Link>
                <CitySearch />
                <Forecast />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location
})

export default connect(mapStateToProps)(CityPage);