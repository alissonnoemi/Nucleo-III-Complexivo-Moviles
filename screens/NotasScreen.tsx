import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { auth, db } from '../firebase/Config';

export default function NotasScreen() {
  const [id, setid] = useState("")
  const [notas, setnotas] = useState([])

  function leer() {
    const starCountRef = ref(db, 'usuarios/' + id + '/notas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let notasTemporales: any = Object.keys(data).map(ide => ({
        ide,  ...data[ide]
      }))
      
      setnotas(notasTemporales) 
    });
  }

  function leerUID() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setid(uid)
      }
    });
  }

  useEffect(() => {
    leerUID()
    leer()
  }, [])

  return (
    <View>
      <Text>NotasScreen</Text>

      <FlatList 
        data={notas} 
        renderItem={({ item } : any) => (
            <Text>{item.descripcion}</Text>
        )} 
      />
    </View>
  )
}

const styles = StyleSheet.create({})