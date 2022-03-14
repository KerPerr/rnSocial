import { Button, TouchableOpacity, View } from "react-native"
import { styles } from "../../../Style"

export const Settings = (props) => {

    const { navigation, setSetting } = props

    const update = (config) => {
        setSetting(config)
        navigation.navigate('Home')
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} title="Première génération" onPress={() => update({ offset: 0, limit: 151 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Deuxième génération" onPress={() => update({ offset: 151, limit: 251 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Troisième génération" onPress={() => update({ offset: 251, limit: 386 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Quatrième génération" onPress={() => update({ offset: 386, limit: 493 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Cinquième génération" onPress={() => update({ offset: 493, limit: 0 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Sixième génération" onPress={() => update({ offset: 0, limit: 0 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Septième génération" onPress={() => update({ offset: 0, limit: 0 })}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button color={'#006989'} style={styles.button} title="Huitième génération" onPress={() => update({ offset: 0, limit: 0 })}></Button>
            </TouchableOpacity>
        </View>
    )
}