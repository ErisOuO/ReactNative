import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type PropiedadesHeader = {
    titulo: string
}

const Header = (props: PropiedadesHeader) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>{props.titulo}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'black',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})
