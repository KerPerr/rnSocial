import React from 'react'
import { styles } from '../../Style'
import { FlatList, TouchableHighlight, Text, View, Modal, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Network = () => {

    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        (async () => {
            const uid = await AsyncStorage.getItem('uid')
            const jwt = await AsyncStorage.getItem('jwt')

            const request = {
                method: 'GET',
                headers: {
                    'uid': uid,
                    'Cookie': `access_token=${jwt}`
                },
                credentials: 'include'
            }

            fetch(`http://localhost:5000/users`, request)
                .then(res => res.json())
                .then(data => setUsers(data))
                .catch(err => console.log(err))
        })()
    }, [])

    return (
        <FlatList data={users} numColumns={2} keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
                <User item={item} />
            )}
        />
    )
}

const User = ({ item }) => {

    const [visible, setVisible] = React.useState(false)

    return (
        <View style={{ flex: 1 }}>
            <TouchableHighlight style={styles.card} onPress={() => setVisible(!visible)}>
                <View>
                    <Text style={styles.pokemon}>{item.lastName} {item.firstName}</Text>
                </View>
            </TouchableHighlight>

            <Modal animationType={"slide"} transparent={true} visible={visible} onRequestClose={() => Alert.alert('Modal has now been closed.')}>
                <TouchableHighlight style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1, }} activeOpacity={1} onPressOut={() => setVisible(!visible)}>
                    <View style={styles.modal}>
                        {/* VOIR LINKEDIN */}
                        <Text>Voulez vous ajouter {item.lastName} {item.firstName}</Text>
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
    )
}