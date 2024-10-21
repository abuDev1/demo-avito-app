export const loadCards = () => {
  return (dispatch) => {
    dispatch({
      type: "load/cards/start",
    });

    fetch("http://localhost:8000/advertisement")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "load/card/success",
          payload: data,
        });
      });
  };
};
