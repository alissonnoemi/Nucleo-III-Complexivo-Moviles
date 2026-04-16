import { ActivityIndicatorBase, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { auth, db } from '../firebase/Config';

export default function InformacionScreen({navigation}: any) {

    const [usuario, setusuario] = useState({ avatar: "", edad: 0 })

    function leerUsuario() {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                getUsuario(uid)
            } else {
            }
        });
    }


    useEffect(() => {
        leerUsuario()
    }, [])

    function getUsuario(uid: String) {
        const starCountRef = ref(db, 'usuarios/' + uid);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            //console.log(data)
            setusuario(data)
        });
    }

    function serrarSesion() {
        signOut(auth).then(() => {
            alert("Saliste de la sesion")
            navigation.navigate("Home")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View>
            <Text>InformacionScreen</Text>
            <Text>Avatar: {usuario.avatar}</Text>
            <Text>Edad: {usuario.edad}</Text>

            <Button title='cerrar' onPress={serrarSesion} />
        </View>
    )
}

const styles = StyleSheet.create({})