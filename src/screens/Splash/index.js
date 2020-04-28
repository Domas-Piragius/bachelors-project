import React from 'react';
import { View, Text, Image } from 'react-native';

const Splash = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 150, height: 150 }} source={require('../../images/logo.png')} />
        </View>
    )
}

export default Splash;