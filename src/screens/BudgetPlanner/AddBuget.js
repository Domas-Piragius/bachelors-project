import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header'
const AddBudget = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>Budget Planner</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, justifyContent: 'center', }}>
                <View>
                    <Text >Enter Number</Text>
                    <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10, backgroundColor : '#fff' }}>
                        <TextInput style={{ fontSize: 18 }} />
                    </View>
                </View>
                <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>CATEGORY</Text>
                </TouchableOpacity>
                <View style={{}}>
                    <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{}}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default AddBudget;