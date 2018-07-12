import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ToastAndroid,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import {colors} from '../constants';
import API from '../components/api'
/**
 * Clase la cual sirve como controlador y vista de la parte
 * de login del usuario
 */
export default class Login extends React.Component {
    state={
        correo:'',
        clave:'',
        loader:false
    }

    API=new API('user',true);
    
    /** 
     * Funcion con la cual se establece el valor a los atributos de la clase
     * @param key identificador unico al cual se le asignara su valor
     * @param value valor que se le asignara a la llave
     */
    onChangeText=(key,value) => {
        this.setState({
           [key]:value 
        });
    }
    /**
     * Metodo con el cual se logea al usuario
     */
    onPress=()=>{
        this.setState({loader:true});
        if(this.state.clave&&this.state.correo){
          this.API.postRequest('logearUsuario',{email:this.state.correo,password:this.state.clave})
                    .then((response)=>{
                      if(response.err){
                        ToastAndroid.show(response.msg,ToastAndroid.SHORT);
                        this.setState({loader:false});
                      }
            }).catch((ex) => {
                this.setState({loader:false});
                ToastAndroid.show('Fallo en la conexion, por favor intente mas tarde',ToastAndroid.SHORT);
            });
        }else{
            this.setState({loader:false});
            ToastAndroid.show('El usuario y la contraseña son obligatorios',ToastAndroid.SHORT);
        }
    }
    render() { 
        return(
            <ScrollView style={{padding:20,backgroundColor:'#607d8b',flex:1}}>
                {this.state.loader
                    &&<ActivityIndicator size="large" color={colors.primary} 
                                 style={{zIndex:1000,elevation:8,opacity:0.6}}/>}
                <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'auto',justifyContent:'center',color:'#fff',left:120}}>
                     GoCase
                </Text>
                {!this.state.loader&&<TextInput                                     
                    placeholder='Correo electronico'
                    style={styles.input}
            onChangeText={val => this.onChangeText('correo',val)}
                value={this.state.correo} />}
                 {!this.state.loader&&<TextInput 
            placeholder='Contraseña'
            secureTextEntry={true}
              onChangeText={val => this.onChangeText('clave',val)}
                    style={styles.input}/> }
                {!this.state.loader
                &&<View width={100} left={122} >
                    <Button  
                    onPress={this.onPress}title='Entrar' /> 
                    </View>}
            </ScrollView>
            );
    } 
}
const styles=StyleSheet.create(colors.generalStyle);
