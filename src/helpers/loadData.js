const loadData = async (location) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7de576d75ec1409fbc9122745211208&q=${location}&aqi=no`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};



export default loadData;