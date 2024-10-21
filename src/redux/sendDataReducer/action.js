export const sendData = (nameOfAdvertisement, image, desc, price) => {
  return (dispatch) => {
    dispatch({
      type: "send/data/start",
    });

    fetch("http://localhost:8000/advertisement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nameOfAdvertisement,
        price: price,
        image: image,
        date: "сегодня 12:38",
        location: "Грозный",
      })})
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "send/data/success",
            payload: data,
          });
        })
  };
};
