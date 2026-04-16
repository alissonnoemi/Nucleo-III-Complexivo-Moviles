import { Button, FlatList, Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Positivo from './Positivo'

export default function TarjetaComponent({ datos }: any) {

    const [ocultar, setocultar] = useState(false)
    const [positivo, setpositivo] = useState(false)
    //console.log(datos);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setocultar(true)}>
            <Text> Pelicula: {datos.titulo}</Text>
            <Image source={{ uri: datos.imagen }} style={styles.image} />

            <Modal visible={ocultar}>
                <Text> Pelicula: {datos.titulo}</Text>
                <Image source={{ uri: datos.imagen }} style={styles.image} />
                <Text> Comentarios {"\n\n\n"} </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text> Positivos </Text>
                    <Switch value={positivo} onChange={() => setpositivo (!positivo)} />
                    <Text> Negativos </Text>
                </View>

                {
                    positivo == true 
                    ? <Positivo comentarios={datos.opiniones.opiniones_positivas.detalles} />
                    : <FlatList 
                        data={datos.opiniones.opiniones_negativas.detalles}
                        renderItem={({ item }) => <Text>{item.opinion}</Text>}
                    />
                }


                <Button title='cerrar' onPress={() => setocultar(false)} />
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: "#ccc",
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'contain'
    }
})