import {Alert, RefreshControl, ScrollView} from 'react-native';
import {FullPost} from "../components/FullPost/FullPost";
import {useEffect, useState} from "react";
import axios from "axios";
import {Loading} from "../components/Loading/Loading";

export const FullPostScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [postData, setPostData] = useState({})

  const {id, title} = route.params;

  const getPost = () => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({data}) => {
        setPostData(data)
      })
      .catch((error) => {
        console.log(error)
        Alert.alert("Ошибка", "Не удалось получить пост.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    navigation.setOptions({title})
    getPost()
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <ScrollView
      style={{padding: 20}}
      refreshControl={<RefreshControl
        refreshing={isLoading}
        onRefresh={getPost}
      />}
    >

      <FullPost title={postData.title} body={postData.body}/>
    </ScrollView>
  )
};