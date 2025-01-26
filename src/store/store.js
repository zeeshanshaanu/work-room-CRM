// Local storage
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
// Combine reducers

// Combine reducers
const rootReducer = combineReducers({
  // auth: authReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["refStore", "websocket", "socketPriceStore"], // Do not persist these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore redux-persist actions
        ignoredPaths: ["refStore", "websocket", "socketPriceStore"], // Ignore these state paths
      },
    }),
});

export const persistor = persistStore(store);
export default store;
