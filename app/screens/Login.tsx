import { View, Text, StyleSheet, FlatList, Image, ScrollView , TextInput , Button, Alert} from "react-native";
import Boton from "../components/Boton";
import AntDesign from '@expo/vector-icons/AntDesign';
/*
const popular = [
  { id: "1", titulo: "Cars", imagen: require("../../assets/cars.jpeg") },
  { id: "2", titulo: "Coco", imagen: require("../../assets/coco.jpeg") },
  { id: "3", titulo: "Deadpool", imagen: require("../../assets/depol.jpeg") },
  { id: "4", titulo: "Southpark", imagen: require("../../assets/supta.jpeg") },
  { id: "5", titulo: "Lo que la vida me robo", imagen: require("../../assets/novela.jpeg") },
  { id: "6", titulo: "Dragon Ball", imagen: require("../../assets/dragon.jpeg") },
  { id: "7", titulo: "Rapidos y Furiosos", imagen: require("../../assets/rapidos.jpeg") },
];

const watchingNow = [
  { id: "1", titulo: "Élite", reanudar: "REANUDAR EPISODIO", progreso: "T6 E5, 35m restantes", imagen: require("../../assets/elite.jpg") },
  { id: "2", titulo: "Supercool", reanudar: "REANUDAR PELICULA", progreso: "58m restantes", imagen: require("../../assets/supercool.jpg") },
  { id: "3", titulo: "La Casa de Papel", reanudar: "REANUDAR EPISODIO", progreso: "T3 E7, 10m restantes", imagen: require("../../assets/casapapel.jpg") },
];

const recomendaciones = [
  { id: "1", titulo: "Stranger Things", imagen: require("../../assets/stranger.jpg") },
  { id: "2", titulo: "Rosa de Guadalupe", imagen: require("../../assets/rosadeguada.jpeg") },
  { id: "3", titulo: "Secreto en el Rio", imagen: require("../../assets/secreto.jpg") },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Ver en TV</Text>

        <Text style={styles.subtitle}>Popular ahora</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {popular.map((item) => (
            <Image key={item.id} source={item.imagen} style={styles.poster} />
          ))}
        </ScrollView>

        <Text style={styles.subtitle}>Continuar viendo</Text>
        <FlatList
          horizontal
          data={watchingNow}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.imagen} style={styles.continuePoster} />
              <Text style={styles.reanudar}>{item.reanudar}</Text>
              <Text style={styles.progress}>{item.progreso}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.subtitle2}>Recomendaciones para Erick</Text>
        <FlatList
          horizontal
          data={recomendaciones}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.imagen} style={styles.recomendacion} />
              <Text style={styles.progress}>{item.titulo}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.option}>
          <Text style={styles.icon}>🏠</Text>
          <Text style={styles.opc}>Inicio</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.opc}>Buscar</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.icon}>▶️</Text>
          <Text style={styles.opc}>Control Remoto</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.icon}>📺</Text>
          <Text style={styles.opc}>Dispositivos</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.opc}>Cuenta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#2e034f",
    padding: 20, 
  },

  scrollView: { 
    flexGrow: 0, 
    marginBottom: 17,
  },

  title: { 
    fontSize: 30, 
    fontWeight: "bold", 
    color: "#FFF", 
    marginBottom: 10, 
  },
  
  subtitle: { 
    fontSize: 22, 
    color: "#FFF", 
    marginVertical: 10, 
  },

  opc: {
    fontSize: 13,
    fontWeight: "bold", 
    color: "#FFF", 
  },

  subtitle2: { 
    fontSize: 22, 
    color: "#FFF", 
    marginTop: 20, 
    marginBottom: 10, 
  },

  poster: { 
    width: 150, 
    height: 230, 
    borderRadius: 10, 
    marginRight: 10, 
  },

  continuePoster: { 
    width: 310, 
    height: 160, 
    borderRadius: 10, 
  },

  recomendacion: { 
    width: 210, 
    height: 120, 
    borderRadius: 10, 
  },

  card: { 
    marginRight: 15, 
  },

  progress: { 
    color: "#FFFFFF", 
    fontSize: 16, 
    marginTop: 5,
    fontWeight: "bold",  
  },

  reanudar: {
    color: "#8C8C8C", 
    fontSize: 12, 
    fontWeight: "bold", 
    marginTop: 5, 
  },

  footer: {
    position: "absolute", 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: "#1E0233", 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    paddingVertical: 10,
    gap: '15',
  },

  option: {
    alignItems: "center", 
  },

  icon: {
    fontSize: 20, 
    color: "#FFF",
  },
});
*/

export default function Login(){
  return(
      <View style={estilos.container}>
          <Text style={estilos.titulo} >PODAI</Text>
          <Text style={estilos.labels}>Usuario</Text>
          <TextInput placeholder="Usuario" style={estilos.cajas}/>
          <Text style={estilos.labels} >Password</Text>
          <TextInput placeholder="Password" style={estilos.cajas} />
          <Button title="LOGIN" color={'#4B2E1E'}/>
          <Boton titulo="YouTube" 
          onPress={() => (Alert.alert('Componente Boton'))}
          variante='peligro'
          disable={true}
          estilo={estilos.boton}
          icono={<AntDesign name="youtube" size={24} color='red'/>}
          posicionIcono="izquierda" />

          <Boton titulo="Facebook" onPress={()=>{Alert.alert('Logueado con Facebook')}}
          icono={<AntDesign name="facebook-square" size={24} color="blue" />}
          estilo={estilos.boton}/>
      </View>
  )
}

const estilos = StyleSheet.create({
  titulo:{
      fontSize:30,
      color:'#4B2E1E',
      fontWeight:'bold',
      alignSelf:'center'
  },
  container:{
      backgroundColor:'#EDE0D4',
      flex:1,
      alignItems:'stretch',
      justifyContent:'center',
      paddingHorizontal: 20,
  },
  labels:{
      fontSize:20,
      fontWeight:'700',
      color:'#4B2E1E'
  },
  cajas:{
      borderWidth:3,
      borderRadius:7,
      borderColor:'#4B2E1E',
      padding:10,
      marginVertical:10
  },
  boton: {
    backgroundColor: '#6E4A2D',
  }
})