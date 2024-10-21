// library
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// action

// components
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TitleAndPrice } from "../components/TitleAndPrice/TitleAndPrice";
import { AddToFavouriteAndCompareButtons } from "../components/AddToFavouriteAndCompareButtons/AddToFavouriteAndCompareButtons";
import { Slider } from "../components/Slider/Slider";
import { Button } from "../components/Button/Button";
import { Location } from "../components/Location/Location";
import { SecondDescription } from "../components/SecondDecription/SecondDescription";


export const Advertisement = () => {
  const id = parseInt(useParams().id)
  const desc = useSelector((state) => state.openedCards.desc)
  const address = useSelector((state) => state.openedCards.address)
  const image = useSelector((state) => state.openedCards.image)
  const phone = useSelector((state) => state.openedCards.phone)
  const title = useSelector((state) => state.openedCards.title)


  return (     
 <div className="advertisement_cont">
      <Breadcrumbs />
      {
        title.filter((elem) => elem.id === id)
        .map((item) => <TitleAndPrice item={item}/>)
      }
      <AddToFavouriteAndCompareButtons />
      <div className="sliders_and_buttons">
        <div className="slider_left">
          {
            image.filter((elem) => elem.id === id).map((item) => <Slider item={item}/>)
          }
        </div>
        <div className="buttons_right">
          {
            phone.filter((elem) => elem.id === id).map((item) => <Button text={item.phone} padding="15px" fontSize="20px" width='250px'/>)
          }
          <br />
          <Button text="Написать сообщение" padding="15px" fontSize="20px" width='250px'/>
        </div>
      </div>
      {/* <Description /> */}
      {
        address.filter((elem) => elem.id === id).map((item) => <Location item={item}/>)
      }
      {
        desc.filter((elem) => elem.advertisementId === id).map((item) => <SecondDescription item={item}/>)
      }
      {/* <LastDecription /> */}
    </div>
 )}