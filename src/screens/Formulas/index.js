import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header/index'
const Formulas = () => {
    return (
        <View style={{ flex: 1 }}>
             <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>FORMULAS</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>GPM</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#fff', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Formulas goes here</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>DPI</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', backgroundColor: '#fff',borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Formulas goes here</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
export default Formulas;