import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Config';

export default function LoginScreen( {navigation}: any) {

    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")

    function Login() {
        signInWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("Drawer")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <View>
            <Text>LoginScreen</Text>
            <TextInput placeholder='Ingresar correo'
                onChangeText={setCorreo} />
            <TextInput placeholder='Ingresar contraseña'
                onChangeText={setContrasenia} />
            <Button title='Login' onPress={Login} />
            <Button title='Registrarse' onPress={ ()=> navigation.navigate("Registro")}/>
        </View>
    )
}

const styles = StyleSheet.create({})