import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
export default class Login extends React.Component {
    state={
        correo:'',
        clave:''
    }
    onChangeText=(key,value) => {
        this.setState({
           [key]:value 
        });
    }
    render() { 
        return(
           <View style={styles.container} >
            <Text style={styles.header} 
                >GoCase
            </Text>
                <TextInput 
                    placeholder='Correo electronico'
                    style={styles.input}
            onChangeText={val => this.onChangeText('correo',val)}
                value={this.state.correo}
                />
            <TextInput 
            placeholder='Contraseña'
            secureTextEntry={true}
              onChangeText={val => this.onChangeText('clave',val)}
                    style={styles.input}
                />   
            </View>
            );
    } 
}
const styles=StyleSheet.create({
        input:{
            color:'#fff',
            margin:10,
            paddingHorizontal:8,
            height:50,
              justifyContent:'center',
            textAlign:'center'
        },
        container:{
            backgroundColor:'#607d8b',
            flex:1,
            justifyContent:'center'
        },
    header:{
        color:'#fff',
        position:'absolute',
        top:55,
        left:130,
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:35,
        textAlign:'center',
        fontWeight: 'bold'
        }
    });
