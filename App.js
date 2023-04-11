import React from "react";

import { Provider } from "react-redux";
import { View } from "react-native";


import { StatusBar } from "expo-status-bar";

import { useRoute } from "./shared/components/routing";

import { useFont } from "./shared/hooks/useFonts";

import { store } from "./redux/store";

import { auth } from "./firebase/config";

import { onAuthStateChanged } from "firebase/auth";

import { Main } from "./shared/components/Main";


export default function App() {
  const { appIsReady, onLayoutRootView } = useFont();


  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Main/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
