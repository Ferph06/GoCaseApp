import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {colors} from '../constants'
import t from 'tcomb-form-native'; 
const Form = t.form.Form;
const UserForm=t.struct({
  Nombre:t.String,
    ApellidoMaterno:t.String,
    ApelldioPaterno:t.String,
    Correo:t.String,
    Password:t.String
    
});
const options={}
export default class Registro extends React.Component {
    render() {
          return(
            <View 
              style={style.container}
              >
                <Form  ref='form'
                type={UserForm}
                options={options}
                />
            </View>
        );
    }
}
const style=StyleSheet.create(colors.generalStyle);