import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';


const phoneBookPersistConfig = {
    key:'phoneBook',
    storage,
    whitelist:['contacts'],
}

const persistedRootReducer = combineReducers({
    ...rootReducer,
    phoneBook: persistReducer(phoneBookPersistConfig, rootReducer.phoneBook)
})

export const store = configureStore({
    reducer:persistedRootReducer,
    middleware: getDefaultMiddelware =>
    getDefaultMiddelware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store);