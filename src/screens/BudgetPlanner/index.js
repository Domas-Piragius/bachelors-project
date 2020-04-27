import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import AddBudget from './AddBuget';
import ViewBudget from './ViewBudget';
import Swiper from '../Components/RNSwiper'

const BudgetPlanner = () => {
    return (
        <View style={{ flex: 1 }}>
             <Swiper style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ViewBudget />
                </View>
                <View style={{ flex: 1 }}>
                    <AddBudget />
                </View>
            </Swiper>
        </View>
    )
}
export default BudgetPlanner;