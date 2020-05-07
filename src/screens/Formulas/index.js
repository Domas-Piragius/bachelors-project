import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header/index'
const Formulas = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Formulės</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>GPM</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>FORMULAS GOES HERE</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>DPI</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#479B92', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>FORMULAS GOES HERE</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
export default Formulas;