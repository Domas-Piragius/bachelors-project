import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { Picker } from '@react-native-community/picker';

const AddBudget = () => {
    const [category, setCategory] = useState('');
    const [categoryIndex, setCategoryIndex] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>Budget Planner</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
                <View>
                    <Text >Enter Number</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                        <TextInput style={{ fontSize: 18 }} />
                    </View>
                </View>
                <Text style={{}}>Select Category</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={category}
                        style={{ flex: 1, height: 50, width: '100%', color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => {
                            setCategory(itemValue)
                            setCategoryIndex(itemIndex)
                        }
                        }>
                        <Picker.Item label="Mokesčiai" value="0" />
                        <Picker.Item label="Komunalinės" value="1" />
                        <Picker.Item label="Nuoma" value="2" />
                        <Picker.Item label="Maistas" value="3" />
                        <Picker.Item label="Pramogos" value="4" />
                        <Picker.Item label="Gėrimai" value="5" />
                        <Picker.Item label="Degalai" value="6" />
                        <Picker.Item label="Turto prižiūrėjimas" value="7" />
                        <Picker.Item label="Rūbai" value="8" />
                    </Picker>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{}}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}
export default AddBudget;