import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from "./HomeScreen";
import {FullPostScreen} from "./FullPostScreen";

const {Navigator, Screen} = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home'
                component={HomeScreen}
                options={{title: 'Посты'}}
        />

        <Screen name='FullPost'
                component={FullPostScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}