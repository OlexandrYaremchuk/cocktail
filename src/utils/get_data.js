import axios from "axios";

const get_data = async () => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default get_data;
