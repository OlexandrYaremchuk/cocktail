export const get_cocktail_data = (data) => {
  return { type: "GET_DATA", payload: data };
};
export const remove_data = (dataId) => {
  return { type: "REMOVE_DATA", payload: dataId };
};
