const fetchData = async (location) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
};


export default fetchData;