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
    alert('My telegram and whatsapp number: +923142116223 and telegram username: @wajihaamir')
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ title: 'Login' }} name="Login" component={Login} />
                <Stack.Screen options={{ title: '' }} name="Home" component={Home} />
                <Stack.Screen options={{ title: '' }} name="TaxCalculator" component={TaxCalculator} />
                <Stack.Screen options={{ title: '' }} name="CustomTaxCalculator" component={CustomTaxCalculator} />
                <Stack.Screen options={{ title: '' }} name="BudgetPlanner" component={BudgetPlanner} />
                <Stack.Screen options={{ title: '' }} name="Formulas" component={Formulas} />
                <Stack.Screen options={{ title: '' }} name="News" component={News} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;