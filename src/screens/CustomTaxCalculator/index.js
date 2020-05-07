import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header';
import { Picker } from '@react-native-community/picker';

const CustomTaxCalculator = () => {

    const [activeQuestion, setActiveQuestion] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: '#394948' }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Nustatyti</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <Text style={{ color: '#fff' }}>1 klausimas</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={'category'}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue, itemIndex) => {
                        }
                        }>
                        <Picker.Item label="Option 1" value="Option 1" />
                        <Picker.Item label="Option 2" value="Option 2" />
                    </Picker>
                </View>
                <Text style={{ color: '#fff' }}>2 klausimas</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#D1E7F3', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={'category'}
                        style={{ flex: 1, height: 50, width: '100%', color: '#000' }}
                        onValueChange={(itemValue, itemIndex) => {
                        }
                        }>
                        <Picker.Item label="Option 1" value="Option 1" />
                        <Picker.Item label="Option 2" value="Option 2" />
                    </Picker>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1, height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#479B92', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', }}>tęsti</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomTaxCalculator;