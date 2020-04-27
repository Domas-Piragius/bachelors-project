import React from 'react';
import { View, Text, Image } from 'react-native';

const Splash = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
        </View>
    )
}

export default Splash;