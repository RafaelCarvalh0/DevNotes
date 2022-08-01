import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { persistStore } from 'redux-persist';
import { store } from "./app/store";
import MainStack from "./stacks/MainStack";

let persistor = persistStore(store);

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}