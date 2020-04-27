import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import AddBudget from './AddBuget';
import ViewBudget from './ViewBudget';

const BudgetPlanner = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ViewBudget />
        </View>
    )
}
export default BudgetPlanner;