import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header'
const TaxCalculator = () => {

    const [isBasicOpen, setIsBasicopen] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>TAX Calculator</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setIsBasicopen(!isBasicOpen)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>BASIC</Text>
                    </TouchableOpacity>
                    {isBasicOpen && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                        <View>
                            <Text>Result</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>SAVED</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>CUSTOM</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default TaxCalculator;