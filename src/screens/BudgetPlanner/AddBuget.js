import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { Picker } from '@react-native-community/picker';
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const AddBudget = () => {

    const [money, setMoney] = useState('');
    const [category, setCategory] = useState('Mokesčiai');
    const [categoryIndex, setCategoryIndex] = useState(0);

    useEffect(() => {

    }, [money, category, categoryIndex])

    const addSpend = () => {
        if (money) {
            firestore().collection(auth().currentUser.uid).doc('spends').collection('spends').add({
                money: money,
                category: category,
                categoryIndex: categoryIndex,
                date : new Date().getTime()
            }).then(() => {
                alert('Save successfully ')
                setMoney('')
                setCategory('Mokesčiai')
                setCategoryIndex(0)
            })
        } else {
            alert('insert amount')
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>Budget Planner</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
                <View>
                    <Text >Enter Number</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor: '#fff' }}>
                        <TextInput keyboardType={'numeric'} value={money} onChangeText={(text) => setMoney(text)} style={{ fontSize: 18 }} />
                    </View>
                </View>
                <Text style={{}}>Select Category</Text>
                <View style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                    <Picker
                        selectedValue={category}
                        style={{ flex: 1, height: 50, width: '100%', color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => {
                            setCategory(itemValue)
                            // console.log('itemIndex=',itemIndex)
                            setCategoryIndex(itemIndex)
                        }
                        }>
                        <Picker.Item label="Mokesčiai" value="Mokesčiai" />
                        <Picker.Item label="Komunalinės" value="Komunalinės" />
                        <Picker.Item label="Nuoma" value="Nuoma" />
                        <Picker.Item label="Maistas" value="Maistas" />
                        <Picker.Item label="Pramogos" value="Pramogos" />
                        <Picker.Item label="Gėrimai" value="Gėrimai" />
                        <Picker.Item label="Degalai" value="Degalai" />
                        <Picker.Item label="Turto prižiūrėjimas" value="Turto prižiūrėjimas" />
                        <Picker.Item label="Rūbai" value="Rūbai" />
                    </Picker>
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={addSpend} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{}}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}
export default AddBudget;