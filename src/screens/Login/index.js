import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';

const Login = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 25, justifyContent: 'space-around', }}>
            <View style={{ alignItems: 'center', marginTop: 30 }} >
                <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
            </View>
            <View>
                <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#0291ff', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-3-512.png' }} />
                        </View>
                        <Text style={{ color: 'white' }}>LOGIN WITH FACEBOOK</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: .8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://www.freepngimg.com/thumb/google/66893-guava-logo-google-plus-suite-png-image-high-quality.png' }} />
                        </View>
                        <Text style={{}}>LOGIN WITH GOOGLE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}
export default Login;