import React from 'react';
import { View,  
  KeyboardAvoidingView, 
  Image, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Text } 
  from 'react-native';

export default function App() {
 return(
   <KeyboardAvoidingView style={styles.background}>
     <View style={styles.containerLogo}>
      <Image
        source={require('./src/img/logo.png')}
      />
     </View>

     <View style={styles.container}>
        <TextInput
        style={styles.input}
          placeholder="E-mail"
          autoCorrect={false} //correto ortografico...
          onChangeText={()=> {}} 
        />

        <TextInput
          style={styles.input}  
          placeholder="Senha"
          autoCorrect={false} //correto ortografico...
          onChangeText={()=> {}} 
        /> 
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText} >Criar conta gratuita</Text>
        </TouchableOpacity>
     </View>
   </KeyboardAvoidingView>
 );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  }, 
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7 ,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  registerText: {
    color: '#FFF'
  }
});