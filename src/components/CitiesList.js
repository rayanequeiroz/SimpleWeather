const CitiesList = (state) => {
  const cities = JSON.parse(localStorage.getItem('cities'));

  return <div>{JSON.stringify(cities)}</div>
}

export default CitiesList;
