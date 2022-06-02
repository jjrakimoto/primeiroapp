import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogos Legais</Text>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require("./assets/cs.jpg")}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  },
  titulo:{
    fontSize:40,
    marginTop:30,
    color:"red"
    


  },
  img:{
width:350,
height:300
  },
  jogo:{
    marginTop:20,
    fontSize:18,
    marginBottom:8,
    
  }
});
