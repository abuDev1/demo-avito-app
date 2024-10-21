export const loadTitle = () => {
  return (dispatch) => {
    dispatch({
      type: "load/title/start",
    });

    fetch('http://localhost:8000/title')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "load/title/success",
          payload: data,
        });
      });
  };
};

export const loadLargeImage = () => {
  return (dispatch) => {
    dispatch({
      type: "load/image/start",
    });

    fetch("http://localhost:8000/sliderImage")
      .then((response) => response.json())
      .then((image) => {
        dispatch({
          type: "load/image/success",
          payload: image,
        });
      });
  };
};

export const loadAddress = () => {
  return (dispatch) => {
    dispatch({
      type: "load/address/start",
    });

    fetch("http://localhost:8000/addresses")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "load/address/success",
          payload: data,
        });
      });
  };
};

export const loadPhone = () => {
  return (dispatch) => {
    dispatch({
      type: "load/phone/start",
    });

    fetch("http://localhost:8000/phone")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "load/phone/success",
          payload: data,
        });
      });
  };
};

export const loadDesc = () => {
  return (dispatch) => {
    dispatch({
      type: "load/desc/start",
    });

    fetch("http://localhost:8000/descriptionAdvertisement")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "load/desc/success",
          payload: data,
        });
      });
  };
};
