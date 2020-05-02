import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import SubEntries from './SubEntries'


const ByMonth = ({ isBudgetActive }) => {

    const [spends, setSpends] = useState([{ total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }])
    const [totalSpends, setTotalSpends] = useState(0)
    const [activeIndex, setActiveIndex] = useState(undefined)

    useEffect(() => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let uid = auth().currentUser.uid;
        let spends = []
        let grandTotal = 0;
        let normalizedData = {}
        let arr = [{ total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }, { total: 0, list: [] }]
        firestore().collection(uid).doc('spends').collection('spends').get().then(async (querySnapshot) => {
            await querySnapshot.forEach(function (doc, index) {
                // console.log(doc.id, " => ", doc.data());
                spends.push({ key: doc.id, data: doc.data() })
                if (index == querySnapshot.size - 1) {
                    for (let i = 0; i < spends.length; i++) {
                        const element = spends[i];
                        grandTotal += Number(element.data.money)
                        let monthIndex = new Date(element.data.date).getMonth()
                        let fullyear = new Date(element.data.date).getFullYear()
                        if (!normalizedData[`${monthNames[monthIndex]}-${fullyear}`]) {
                            normalizedData[`${monthNames[monthIndex]}-${fullyear}`] = { total: 0, list: [] }
                        }
                        normalizedData[`${monthNames[monthIndex]}-${fullyear}`].list.push(element);
                        normalizedData[`${monthNames[monthIndex]}-${fullyear}`].total += Number(element.data.money)
                        normalizedData[`${monthNames[monthIndex]}-${fullyear}`].date = element.data.date
                        normalizedData[`${monthNames[monthIndex]}-${fullyear}`].monthYear = `${monthNames[monthIndex]}-${fullyear}`
                    }
                    let normalizedArray = Object.values(normalizedData)
                    normalizedArray.sort((a, b) => new Date(b.date) - new Date(a.date))
                    console.log(normalizedArray, 'normalizedData')
                    setSpends([...normalizedArray])
                    setTotalSpends(grandTotal)
                    // setSpends(arr)
                }
            })
        })
        // let arr = spends.filter(x>)
    }, [isBudgetActive])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'green' }}>{'$' + totalSpends}</Text>
            </View>
            <Text style={{ marginHorizontal: 25 }}>Sort by Month</Text>
            {spends && <ScrollView contentContainerStyle={{ marginHorizontal: 25, paddingBottom: 50 }}>

                <FlatList
                    data={spends}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == index ? undefined : index)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 14 }}>{item.monthYear}</Text>
                                        </View>
                                        <View style={{}}>
                                            <Text style={{ fontSize: 14 }}>{'$' + item.total}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {activeIndex == index && <SubEntries data={spends[index].list} />}
                            </>
                        )
                    }}
                />

                {/* {activeIndex == 0 && <SubEntries data={spends[0].list} />}


                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 1 ? undefined : 1)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>February</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[1].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 1 && <SubEntries data={spends[1].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 2 ? undefined : 2)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>March </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[2].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 2 && <SubEntries data={spends[2].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 3 ? undefined : 3)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>April </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[3].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 3 && <SubEntries data={spends[3].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 4 ? undefined : 4)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>May </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[4].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 4 && <SubEntries data={spends[4].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 5 ? undefined : 5)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>June </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[5].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 5 && <SubEntries data={spends[5].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 6 ? undefined : 6)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>July </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[6].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 6 && <SubEntries data={spends[6].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 7 ? undefined : 7)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>August </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[7].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 7 && <SubEntries data={spends[7].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 8 ? undefined : 8)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>September</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[8].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 8 && <SubEntries data={spends[8].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 9 ? undefined : 9)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>October</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[9].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 9 && <SubEntries data={spends[9].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 10 ? undefined : 10)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>November</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[10].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 10 && <SubEntries data={spends[10].list} />}
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex == 11 ? undefined : 11)} style={{ height: 50, borderRadius: 10, marginVertical: 10, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>December</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 16 }}>{'$' + spends[11].total}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {activeIndex == 11 && <SubEntries data={spends[11].list} />} */}
            </ScrollView>}
        </View>
    )
}

export default ByMonth;