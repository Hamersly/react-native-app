import {ActivityIndicator, Text, View} from "react-native";
import {LoadingText, LoadingView} from "./Loading.style";

export const Loading = () => {
  return (
    <LoadingView>
      <ActivityIndicator size="large"/>
      <LoadingText>Загрузка...</LoadingText>
    </LoadingView>
  );
};