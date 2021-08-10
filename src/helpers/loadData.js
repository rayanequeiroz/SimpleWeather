const loadData = async (location) => {
  try {
  const response = await fetch(`https://goweather.herokuapp.com/weather/${location}`);
  const data = await response.json();
  
  return data;
  } catch (e) {
  console.error(e);
  }
  };

export default loadData;