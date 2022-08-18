import {PostBody, PostContent, PostDate, PostDetails, PostImage, PostTitle} from "./Post.styled";

export const Post = ({title, imageUrl, createdAt, body}) => {

  const truncateTitle = (str) => {
    if (str.length >= 50) {
      return str.substring(0, 50) + '...'
    }
    return str
  }

  return (
    <PostContent>
      <PostImage source={{uri: imageUrl}}/>
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostBody>{body}</PostBody>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostContent>
  );
};

