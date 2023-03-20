import { configureStore} from "@reduxjs/toolkit";
import {phoneBookReducer} from "./PhoneBookSlice/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./AuthSlice/slice";

const authPersistConfig = {
    key:'auth',
    storage,
    whitelist:['token'],
}
const contactPersistConfig = {
    key:'phoneBook',
    storage,
}

export const store = configureStore({
    reducer:{
        phoneBook: persistReducer(contactPersistConfig,phoneBookReducer),
        auth:persistReducer(authPersistConfig,authReducer)
    },
    middleware: getDefaultMiddelware =>
    getDefaultMiddelware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
