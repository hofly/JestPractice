import { createStackNavigator } from 'react-navigation';

import Homepage from '../homepage/Homepage.component';
import User from '../user/User.component';


const mainStack = createStackNavigator({
    'homepage': {
        screen: Homepage
    },
    'user': {
        screen: User
    },
    initialRoute: 'homepage'
})

export default mainStack;

// const Stack = createStackNavigator();

// export default mainStack = () => {
//   return (
//     <Stack.Navigator initialRouteName='hompage'>
//       <Stack.Screen name="homepage" component={Homepage} />
//       <Stack.Screen name="user" component={User} />
//     </Stack.Navigator>
//   );
// }