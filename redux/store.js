// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api/api"; // Assuming you have an api defined
import userReducer from "./features/user/userSlice";
import conversationReducer from "./features/conversations/conversationSlice";
import notificationReducer from "./features/notifications/notificationSlice";

// Reducers to persist
const persistedReducers = combineReducers({
  user: userReducer,
  conversation: conversationReducer,
  notification: notificationReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "conversation", "notifications"],
};

const persistedRootReducer = persistReducer(persistConfig, persistedReducers);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
