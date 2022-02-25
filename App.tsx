import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from '/Users/nivedhiyanithin/Desktop/ReactProject/React/TiffinServiceReactNative/.expo/src/Components/LoginPage'
import  PageHeader from '/Users/nivedhiyanithin/Desktop/ReactProject/React/TiffinServiceReactNative/.expo/src/Components/Header';
export default function App() {
  return (
   
   <View style={styles.container}>
     
      <PageHeader/>
      <LoginPage/>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
pageHeader:{
  flex: 1
},
pageBody :{
  flex : 2
}

});