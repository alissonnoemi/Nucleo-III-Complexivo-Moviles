import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TarjetaComponent from '../components/TarjetaComponent';

export default function ListaScreen() {
    const [peliculas, setpeliculas] = useState([])  
    const API_PELICULAS = "https://jritsqmet.github.io/web-api/peliculas3.json"  

    async function leerPeliculas(){
        const resp = await fetch(API_PELICULAS);
      const json = await resp.json();
      setpeliculas(json.peliculas);
    }

    useEffect(() => {
     leerPeliculas() 
     //console.log(peliculas); 
    }, [])
    

    return (
        <View>
            <Text>ListaScreen</Text>
            <FlatList 
                data= {peliculas}
                renderItem={({ item }: any) => (
                <TarjetaComponent datos={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})