import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, FlatList, Text, View, Modal, Button, Pressable, TextInput } from 'react-native';
import { styles } from '../../Style';

export const Wall = ({ navigation, me }) => {

    const [news, setNews] = React.useState([])
    const [visible, setVisible] = React.useState(false);

    const [input, setInput] = React.useState('')
    const [enable, setEnable] = React.useState(true)

    const handleInput = (text) => {
        text.length > 0 ? setEnable(false) : setEnable(true)
        setInput(text)
        console.log(input)
    }

    React.useEffect(() => {
        (async () => {
            const uid = await AsyncStorage.getItem('uid')
            const jwt = await AsyncStorage.getItem('jwt')

            fetch('http://localhost:5000/posts', {
                method: 'GET',
                headers: {
                    uid: uid,
                    Cookie: `access_token=${jwt}`
                },
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => setNews(data))
                .catch(err => console.log(err))
        })()
    }, [])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MaterialIcons name={'chat'} size={24} color={'#555'}
                    style={{ marginEnd: 20 }}
                    onPress={() => setVisible(true)}
                />
            ),
        });
    }, [navigation]);

    return (
        <>
            <FlatList data={news} keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <News key={index} item={item} navigation={navigation} visible={visible} setVisible={setVisible} />
                )}
            />

            <Modal animationType={"slide"} transparent={true} visible={visible}>
                <View style={{ flex: 1, backgroundColor: '#D8D8D8' }}>
                    <View style={{ backgroundColor: '#FFF', height: 64, borderColor: '#D8D8D8', borderWidth: 1, flexDirection: 'row', padding: 10 }}>
                        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons style={{ justifyContent: 'center' }} name={'close'} size={36} color={'#555'} onPress={() => setVisible(false)} />
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5 }}>Partager</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Button title='Publier' disabled={enable} onPress={() => console.log('PRESS')} />
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={{ margin: 10, padding: 5, backgroundColor: 'white' }}
                            value={input}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => handleInput(text)}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}

const News = ({ item }) => {

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.cardHeader}>{item.title}</Text>
            </View>
            <Text style={styles.cardContent}>{item.content}</Text>
            <Text style={styles.cardAuthor}>{item.owner.username}</Text>
        </View>
    )
}

const sheet = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'transparent',
    },
    text: {
        fontWeight: 'bold',
        lineHeight: 21,
        color: 'black',
        fontSize: 16,
    },
});