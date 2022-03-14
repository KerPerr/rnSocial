import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, FlatList, Image, Text, TouchableHighlight, TextInput } from "react-native";
import { styles } from "../../../Style";

export const Home = (props) => {

    const { navigation, setting, setSetting } = props
    const [pokemons, setPokemons] = React.useState([])

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${setting.offset}&limit=${setting.limit}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                setPokemons(data.results)
            })
            .catch(err => console.log(err))
    }, [setting])

    return (
        <>
            <View style={ styles.inputSearch } >
                <TextInput style={styles.recherche} onChangeText={props.onChangeText} value={props.value} />
                <View style={{ display: "float", zIndex: 1, margin: 5 }} >
                    <MaterialIcons name="search" size={40} color="#006989" />
                </View>
            </View>
            <FlatList data={pokemons} keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <Pokemon key={index} id={index + setting.offset + 1} item={item} navigation={navigation} />
                )}
            />
        </>
    );
}

const Pokemon = ({ id, item, navigation }) => {

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
        <TouchableHighlight
            onPress={() => navigation.navigate('Detail', { item, img })}>
            <View style={styles.item}>
                <View>
                    <Image source={{ uri: img }} style={styles.image} />
                </View>
                <Text style={styles.pokemon}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    )
}