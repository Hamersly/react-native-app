import {useEffect, useState} from "react";
import axios from "axios";
import {ActivityIndicator, Alert, FlatList, RefreshControl, Text, TouchableOpacity, View} from "react-native";
import {Post} from "../components/Post/Post";
import {StatusBar} from "expo-status-bar";
import {Loading} from "../components/Loading/Loading";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState()

  const getPosts = () => {

    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(({data}) => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error)
        Alert.alert("Ошибка", "Не удалось получить список постов.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => getPosts(), []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl
          refreshing={isLoading}
          onRefresh={getPosts}
        />}
        data={items}
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
            <Post
              title={item.title}
              imageUrl="https://i1.sndcdn.com/avatars-9ff9bsJVSxVH1uuK-e8MPBA-t500x500.jpg"
              createdAt={new Date().toLocaleString()}
              body={item.body}/>
          </TouchableOpacity>
        }/>


      <StatusBar style="auto"/>
    </View>
  );
};