import { ActivityIndicator, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';

const ListaProductos =() => {
    //Definimos la estructura de datos a emplear por cada item
    type producto = {
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
    //Definimos el estado para el producto
    const [producto, setProductos] = useState<producto[]>([]);
    const [Cargando, setCargando] = useState<boolean>(true);

    useEffect(()=>{
        const CargaDatos = async () => {
            setCargando(true);
            try{
                //Vamos a realizar la peticion fetch
                const respuesta= await fetch('https://fakestoreapi.com/products');
                //Verificamos si diosito no quiso
                if(!respuesta.ok){
                    throw new Error('Error al conectar con la fuente de datos: ${respuesta.status}');
                }
                //Procedemos a pasar la respuesta de un objeto JSON
                const datos = await respuesta.json();
                setProductos(datos as producto[]);
                setCargando(false);
                console.log(datos);

            } catch (error){
                console.log('Error durante la obtencion de datos: ${error}');
            }    
        }
        CargaDatos();
    },[])

    //Pantalla UnLoadScreen
    const UnLoadScreen = () => {
        return (
            <View style={styles.container}>
                <Text>Cargando Datos...</Text>
                <ActivityIndicator size='large' color='blue'/>
            </View>
        );
    }

    //Pantalla LoadScreen
    const LoadScreen = () => {
        return (
            <View style={styles.container}>
                <Text>Ya cargo gg</Text>
                <FlatList
                    data={producto}
                    renderItem={({item}) => <ProductoItem {...item}/>}
                    keyExtractor={(item) => item.id.toString()}/>
            </View>
        )
    }

    const ProductoItem = (props:producto) => {
        return (
            <View style={styles.containerItem}>
                <Text>Producto: {props.title}</Text>
                <Text>Precio: ${props.price}</Text>
                <Image source={{uri: props.image}} style={{width: 150, height: 150}} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {Cargando ? <UnLoadScreen/> : <LoadScreen/>}
        </View>
    )
}

export default ListaProductos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerItem: {
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        boxShadow: '0px 0px 0px 5px rgba(0,0,0,0.5)'
    }
})