import React, { Component } from 'react';
import { TextInput, TouchableHighlight, ImageBackground, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

export class Login extends Component {
   static navigationOptions = {
      title:'Login',
      header: null
   }

   constructor(props) {
      super(props)
      this.state = {}
   }

   signUpAction = () => {
      this.props.navigation.navigate('SignUp');
   }

   render() {
      return (
         <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
            <Text style={styles.logo}>PhotoSphere</Text>

            <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#ffffff" underlineColorAndroid="transparent"/>
            <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#ffffff" secureTextEntry={true} underlineColorAndroid="transparent"/>
            
            <TouchableHighlight onPress={() => { }} underlayColor="#307eaf" style={styles.actionButton}>
               <Text style={styles.actionButtonText}>Fazer Login</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.signUpAction} underlayColor="transparent" style={styles.signButton}>
               <Text style={styles.signButtonText}>Ainda não tem cadastro? Clique aqui</Text>
            </TouchableHighlight>
         
         </ImageBackground>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain'
   },
   logo:{
      fontSize: 45,
      color: '#ffffff',
      marginBottom: 30
   },
   input:{
      width: "90%",
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: 10,
      color: '#ffffff',
      fontSize:18,
      marginBottom: 12,
   },
   actionButton:{
      width: "40%",
      height: 40,
      backgroundColor: 'transparent',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
   },
   actionButtonText:{
      color:'#ffffff',
      fontSize: 16
   },
   signButton:{
      width: "90%",
      height: 50,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
   },
   signButtonText:{
      color: '#ffffff',
      fontSize: 14
   }
});

const mapStateToProps = (state) => {
   return {
      status: state.auth.status
   };
}

const LoginConnect = connect(mapStateToProps, { checkLogin })(Login);
export default LoginConnect;
