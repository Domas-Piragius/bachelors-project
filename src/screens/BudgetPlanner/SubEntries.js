import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SubEntries = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <View key={item.key} style={{ marginLeft: 30, height: 40, borderRadius: 10, marginVertical: 5, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16 }}>{item.data.category}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 16 }}>{'$' + item.data.money}</Text>
                            </View>
                        </View>
                    </View>
                )
            }}
        />

    )
}
export default SubEntries