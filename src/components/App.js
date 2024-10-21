// library
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// components
import { Advertisement } from "../pages/Advertisement";
import { Message } from "../pages/Message";
import { LincodeComponent } from "./Content/LincodeComponent";
import { Layout } from "./Layout/Layout";
import { Add_advertisement } from "../pages/Add_advertisement";
import { MyAdvertisement } from "../pages/MyAdvertisement";
import { loadCards } from "../redux/homeAdvertisementReducer/action";
import {
  loadAddress,
  loadDesc,
  loadPhone,
  loadLargeImage,
  loadTitle,
} from "../redux/openAdvertisement/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
    dispatch(loadDesc());
    dispatch(loadLargeImage());
    dispatch(loadAddress());
    dispatch(loadPhone());
    dispatch(loadTitle());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LincodeComponent />} />
        <Route path="/advertisement/:id?" element={<Advertisement />} />
        <Route path="/message" element={<Message />} />
        <Route path="/add/advertisement" element={<Add_advertisement />} />
        <Route path="/myAdd" element={<MyAdvertisement />} />
      </Route>
    </Routes>
  );
}

export default App;
