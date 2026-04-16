import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { lessThanOrEqual } from 'firebase/firestore/pipelines'
import { auth, db } from '../firebase/Config'

export default function GuardarScreen() {
  const [titulo, settitulo] = useState("")
  const [descripcion, setdescripcion] = useState("")
  const [fecha, setfecha] = useState("")
  const [id, setid] = useState("")

  function guardarNotas() {
  set(ref(db, 'usuarios/' + id + '/notas/' + titulo), {

      titulo: titulo,
      descripcion: descripcion,
      fecha: fecha
    
  });
  settitulo("")
  setdescripcion("")
  setfecha("")
  alert("Nota guardada")
}

function leerUID(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setid(uid)
      // ...
    } else {
     
    }
  });
}

useEffect(() => {
  leerUID()
}, [])


  return (
    <View>
      <Text>GuardarScreen</Text>
      <TextInput placeholder='titulo' onChangeText={settitulo} value={titulo}/>
      <TextInput placeholder='descripcion' onChangeText={setdescripcion} value={descripcion}/>
      <TextInput placeholder='fecha' onChangeText={setfecha} value={fecha}/>

      <Button title='gaurdar notas' onPress={guardarNotas}/>
    </View>
  )
}

const styles = StyleSheet.create({})