import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        borderColor: "#DDDDDD",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    item: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DDDDDD",
        flexDirection: "row",
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 18,
        height: 100,
        margin: 5,
    },
    image: {
        resizeMode: 'contain',
        height: 150,
        width: 150,
    },
    pokemon: {
        textTransform: 'capitalize',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
    },
    types: {
        textTransform: 'capitalize',
        borderColor: "#DDDDDD",
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        width: '100%',
        padding: 10,
    },
    button: {
        backgroundColor: '#006989',
        marginVertical: 10,
        borderRadius: 25,
        width: 200,
    },
    inputSearch: {
        borderColor: "#DDDDDD",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 5,
        height: 40,
    },
    recherche: {
        width: '100%',
        padding: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderColor: '#DDDDDD',
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        flex: 1
    },
    cardHeader: {
        borderColor: '#DDDDDD',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        padding: 10
    },
    cardContent: {
        padding: 10
    },
    cardAuthor: {
        fontStyle: 'italic',
        textAlign: 'right'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        borderColor: '#DDDDDD',
        marginVertical: 'auto',
        marginHorizontal: 30,
        borderRadius: 5,
        borderWidth: 1,
        height: '80%',
    }
});