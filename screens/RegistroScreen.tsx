import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/Config'
import { getDatabase, ref, set } from 'firebase/database'
import { log } from 'firebase/firestore/pipelines'

export default function RegistroScreen({ navigation }: any) {
    const [correo, setcorreo] = useState("")
    const [contrasenia, setcontrasenia] = useState("")
    const [edad, setedad] = useState(0)
    const [nick, setnick] = useState("")

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                guardarUsuario(user.uid)
                navigation.navigate("Login")
                //console.log(user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    function guardarUsuario(uid : string) {
        set(ref(db, 'usuarios/' + uid), {
            correo: correo,
            avatar: nick,
            edad: edad
        });
    }

    return (
        <View>
            <Text>RegistroScreen</Text>
            <TextInput placeholder="Ingresar correo" onChangeText={setcorreo} />
            <TextInput placeholder="Ingresar contraseña" onChangeText={setcontrasenia} secureTextEntry={true} />
            <TextInput placeholder="Ingresar nombre" onChangeText={setnick} />
            <TextInput placeholder="Ingrese la edad" onChangeText={(texto) => setedad(+texto)}
                keyboardType='numeric' />
            <Button title='Registrarme' onPress={registro} />
        </View>
    )
}

const styles = StyleSheet.create({})