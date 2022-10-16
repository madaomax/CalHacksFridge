const getFoodFromApiAsync = async () => {
  try {
    const response = await fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=tyyeFULMm01buehPyX8JxSQ6MlFiIIVWysBY1vzX");
    const json = await response.json();
    return json.food;
  } catch (error) {
    console.error(error);
  }
};

export default getFoodFromApiAsync;
