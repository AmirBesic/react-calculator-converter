import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./Calculator/calculatorSlice";
import lengthConverterReducer from "./UnitConverter/lengthConverterSlice";
import temperatureConverterReducer from "./UnitConverter/temperatureConverterSlice";
import areaConverterReducer from "./UnitConverter/areaConverterSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const persiConfig = {
    key: 'root',
    storage,
    whitelist: ['calculator', 'converter']
};

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    lengthConverter: lengthConverterReducer,
    areaConverter: areaConverterReducer,
    temperatureConverter: temperatureConverterReducer
})
const persistedReducer = persistReducer(persiConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})


// export {store}
export const persistor = persistStore(store);

export default store;