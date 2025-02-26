import { View, Text, StyleSheet, Button, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
import Boton from '../components/Boton'



const Tienda = () => {
    type prod={
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
        }
    }

    const [producto, setProducto] = useState<prod | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    

    const loadData = async ()=>{
        try {
            const respuesta = await fetch('https://fakestoreapi.com/products/1');
            if (!respuesta.ok) {
                throw new Error('Ocurrio el error: ${respuesta.status}');
            }
            const datos = await respuesta.json();
            console.log(datos);
            setProducto(datos);
        }
        catch (e) {
            console.log('Error: ${e}');
        } finally {
            setLoading(false);
        }
    }

    const screenload=()=>{
        return (
            <View>
                <Text>Tienda</Text>
                <Image source={{uri: producto?.image}} style={{width: 150, height: 150}}/>
                <Text>Producto: {producto?.title}</Text>
                <Text>Descripción: {producto?.description}</Text>
                <Text>Precio: ${producto?.price}</Text>
                <Text>Categoria: {producto?.category}</Text>
                <Text>Calificación: {producto?.rating.rate}</Text>
                <Text>Stock: {producto?.rating.count}</Text>
            </View>
        );
    }

    const screenUnLoad=()=>{
        return (
            <View>
                <Boton titulo='Carga Datos' onPress={loadData}/>
                <Text>Cargando datos</Text>
                <ActivityIndicator/>
            </View>
        );
    }
    
  return (
    loading ? screenUnLoad() : screenload()
  )
}

export default Tienda

const styles = StyleSheet.create({}
    
)
