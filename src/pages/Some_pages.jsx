import React, { useEffect, useState } from "react";
import get_data from "../utils/get_data";
import { useDispatch, useSelector } from "react-redux";
import { get_cocktail_data, remove_data } from "../actions/actions";

const SomePages = () => {
  // const [data, setData] = useState([]);
  // debugger;

  // *! Redux

  const cocktailStore = useSelector((state) => state.cocktail);

  console.log(cocktailStore.cocktailData);

  const dispatch = useDispatch();

  useEffect(() => {
    const get_cocktail = async () => {
      const response = await get_data();
      // setData(response.drinks);
      const response_data = response.drinks;
      dispatch(get_cocktail_data(response_data));
      // console.log(response);
    };
    get_cocktail();
  }, []);
  const onRemoveBtnClick = (id) => {
    dispatch(remove_data(id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cocktailStore.cocktailData.map((data) => {
        return (
          <div style={{ position: "relative", display: "flex" }}>
            {" "}
            <img
              key={data.idDrink}
              style={{ width: "150px" }}
              src={data.strDrinkThumb}
              alt=""
            />
            <img
              style={{
                width: "30px",
                position: "absolute",
                top: "5%",
                right: "5%",
                cursor: "pointer",
              }}
              src="https://cdn1.iconfinder.com/data/icons/restore/1000/Restore-07-512.png"
              alt=""
              onClick={() => onRemoveBtnClick(data.idDrink)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SomePages;
