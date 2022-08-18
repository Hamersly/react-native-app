import {View} from 'react-native';
import {FullPostImage, FullPostText, FullPostTitle} from "./FullPost.styled";

export const FullPost = ({title, body}) => {
  return (
    <View>
      <FullPostTitle>{title}</FullPostTitle>
      <FullPostImage source={{uri: 'https://i1.sndcdn.com/avatars-9ff9bsJVSxVH1uuK-e8MPBA-t500x500.jpg'}}/>
      <FullPostText>{body}</FullPostText>
    </View>
  );
};