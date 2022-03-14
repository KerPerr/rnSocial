import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import { styles } from "../../../Style"

export const Detail = ({ route }) => {

    const { item, img } = route.params
    const [pokemon, setPokemon] = React.useState({})

    React.useEffect(() => {
        fetch(item.url)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
            <FlatList style={{ width: '100%', padding: 15 }} data={pokemon.types} keyExtractor={(type, index) => index}
                renderItem={({ item, index }) => (
                    <Text key={index} style={styles.types}>{item.type.name}</Text>
                )} />
        </View>
    )
}