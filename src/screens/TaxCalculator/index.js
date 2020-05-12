import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header'
const TaxCalculator = ({ navigation }) => {

    const [isBasicOpen, setIsBasicopen] = useState(false)
    const [result, setResult] = useState('')

    const goToCustomTaxCal = () => {
        navigation.navigate('CustomTaxCalculator')
    }

    const onTextChangeSalary = (text) => {
        // Z = 350 - 0,17 * ( X - 607)
        // Y = X - (X - Z) * 0,2 - X * 0,0872 - X * 0,0698 - X * 0,0209 - X * 0,0171

        if (!isNaN(Number(text.trim()))) {
            let X = Number(text)
            if (X <= 0) {
                setResult(0)
            } else {
                let notNegativePart = X - 607 < 0 ? 0 : X - 607;
                let Z = 350 - 0.17 * notNegativePart
                Z = Z < 0 ? 0 : Z
                let y = X - (X - Z) * 0.2 - X * 0.0872 - X * 0.0698 - X * 0.0209 - X * 0.0171
                if (y <= 0) {
                    setResult(0)
                } else {
                    setResult(y)
                }
            }
        }

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Mokesčių apskaičiavimas</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8, backgroundColor: '#479B92' }}>
                    <TouchableOpacity onPress={() => setIsBasicopen(!isBasicOpen)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#fff' }}>Darbuotojo</Text>
                    </TouchableOpacity>
                    {isBasicOpen && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text style={{ color: '#fff' }}>Ant popieriaus</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                                <TextInput onChangeText={onTextChangeSalary} keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#fff' }}>Rezultatas</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, justifyContent: 'center', paddingHorizontal: 10, backgroundColor: '#D1E7F3' }}>
                                <Text>{result}</Text>
                            </View>
                        </View>
                    </View>}
                </View>
                <TouchableOpacity onPress={goToCustomTaxCal} style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8, backgroundColor: '#479B92' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#fff' }}>Darbdavio</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

export default TaxCalculator;