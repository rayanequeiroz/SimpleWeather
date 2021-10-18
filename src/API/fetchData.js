const fetchData = async (location) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=82774a2578a94d41a08172943211710&q=${location}&aqi=no`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};



export default fetchData;