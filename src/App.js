import React from 'react';
import { View, Text } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash'
import Home from './screens/Home';
import TaxCalculator from './screens/TaxCalculator';
import CustomTaxCalculator from './screens/CustomTaxCalculator/index';
import BudgetPlanner from './screens/BudgetPlanner';
import Formulas from './screens/Formulas';
import News from './screens/News';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
    const Stack = createStackNavigator();

    return (
        <News />
        // <NavigationContainer>
        //     <Stack.Navigator options={{}}>
        //         <Stack.Screen name="login" component={Login} />
        //         <Stack.Screen name="splash" component={Splash} />
        //         <Stack.Screen name="signup" component={SignUp} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}
export default App;