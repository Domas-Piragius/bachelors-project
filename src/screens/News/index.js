import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header'
const CustomTaxCalculator = () => {


    return (
        <View style={{ flex: 1, }}>
            <Header />
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>NEWS</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20, color: 'blue', textDecorationLine: 'underline', fontStyle: 'italic' }}>Article 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20, color: 'blue', textDecorationLine: 'underline', fontStyle: 'italic' }}>Article 2</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20, color: 'blue', textDecorationLine: 'underline', fontStyle: 'italic' }}>Article 3</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20, color: 'blue', textDecorationLine: 'underline', fontStyle: 'italic' }}>Article 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomTaxCalculator;