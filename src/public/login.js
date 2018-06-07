import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {colors} from '../constants'
export default class Login extends React.Component {
    state={
        correo:'',
        clave:''
    }
    onChangeText=(key,value) => {
        this.setState({
           [key]:value 
        });
        console.debug(this.state)
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
const styles=StyleSheet.create(colors.generalStyle);
