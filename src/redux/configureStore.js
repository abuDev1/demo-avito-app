import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import { homeAdvertisementReducer } from "./homeAdvertisementReducer/homeAdvertisementReducer";
import { openAdvertisement } from "./openAdvertisement/openAdvertisement";
import { sendDataReducer} from "./sendDataReducer/sendDataReducer";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers ({
    cards: homeAdvertisementReducer,
    openedCards: openAdvertisement,
    sendData: sendDataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))