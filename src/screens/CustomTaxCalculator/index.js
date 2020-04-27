import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../Components/Header'
const CustomTaxCalculator = () => {

    const [activeQuestion, setActiveQuestion] = useState(0)

    return (
        <View style={{ flex: 1, }}>
            <Header />
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 22 }}>Custom</Text>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 1 ? 0 : 1)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 1</Text>
                    </TouchableOpacity>
                    {activeQuestion == 1 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 2 ? 0 : 2)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 2</Text>
                    </TouchableOpacity>
                    {activeQuestion == 2 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 3 ? 0 : 3)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 3</Text>
                    </TouchableOpacity>
                    {activeQuestion == 3 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 4 ? 0 : 4)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 4</Text>
                    </TouchableOpacity>
                    {activeQuestion == 4 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 5 ? 0 : 5)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 5</Text>
                    </TouchableOpacity>
                    {activeQuestion == 5 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <TouchableOpacity onPress={() => setActiveQuestion(activeQuestion == 6 ? 0 : 6)} style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, marginLeft: 20 }}>Question 7</Text>
                    </TouchableOpacity>
                    {activeQuestion == 6 && <View style={{ flex: 1, width: '90%', marginBottom: 20 }}>
                        <View>
                            <Text>Enter before taxes</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 10 }}>
                                <TextInput keyboardType={'numeric'} style={{ fontSize: 18 }} />
                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1, height: 50, borderRadius: 10, marginVertical: 10, marginHorizontal: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>PROCEED</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomTaxCalculator;