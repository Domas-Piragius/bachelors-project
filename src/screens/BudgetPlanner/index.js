import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import AddBudget from './AddBuget';
import ByMonth from './ByMonth';
import ByYearly from './ByYearly';
import ViewBudget from './ViewBudget';
import Swiper from '../Components/RNSwiper'

const BudgetPlanner = () => {

    const [isBudgetActive, setIsBudgetActive] = useState(0)

    return (
        <View style={{ flex: 1 }}>
            <Swiper
                onIndexChanged={(index) => setIsBudgetActive(index)}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AddBudget />
                </View>
                <View style={{ flex: 1 }}>
                    <ByMonth />
                </View>
                <View style={{ flex: 1 }}>
                    <ByYearly />
                </View>
                <View style={{ flex: 1 }}>
                    <ViewBudget isBudgetActive={isBudgetActive} />
                </View>
            </Swiper>
        </View>
    )
}
export default BudgetPlanner;