import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#eee', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', }} >
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
            </View>
            <View style={{ marginHorizontal: 25 }} >
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>TAX CALCULATOR</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>BUDGET PLANNER</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>FORMULAS</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'white', height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>NEWS</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default Home;