import axios from "axios";

export const GetData = () => (dispatch) => {
  try {
    axios({
      url: `https://react-test-starwars.vercel.app/api/products`,
    }).then(({ data }) => {
      const filteredData = data;

      dispatch({
        type: "GetData",
        payload: filteredData,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetDataById = (id) => (dispatch) => {
  try {
    axios({
      url: `https://react-test-starwars.vercel.app/api/products/${id}`,
    }).then(({ data }) => {
      const filteredData = data;
      dispatch({
        type: "GetDataById",
        payload: filteredData,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const AboutBack = () => (dispatch) => {
  try {
    axios({
      url: `https://react-test-starwars.vercel.app/api/products`,
    }).then(({ data }) => {
      const filteredData = data;

      dispatch({
        type: "AboutBack",
        payload: filteredData,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
