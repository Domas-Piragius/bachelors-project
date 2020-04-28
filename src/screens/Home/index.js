import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
    const goToTaxCalculator = () => {
        navigation.navigate('TaxCalculator')
    }
    const goToBudgetPlanner = () => {
        navigation.navigate('BudgetPlanner')
    }
    const goToFormulas = () => {
        navigation.navigate('Formulas')
    }
    const goToNews = () => {
        navigation.navigate('News')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#eee', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', }} >
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
            </View>
            <View style={{ marginHorizontal: 25 }} >
                <TouchableOpacity onPress={goToTaxCalculator} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>TAX CALCULATOR</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/calculator.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToBudgetPlanner} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>BUDGET PLANNER</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/budget_planner.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToFormulas} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>FORMULAS</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/formulas.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNews} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>NEWS</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/news.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default Home;