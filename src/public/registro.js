import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    ToastAndroid
} from 'react-native';
import {colors} from '../constants';

import API from '../components/api';
export default class Registro extends React.Component {
    API=new API('user',false);
    state={
        name:'',
        email:'',
        password:''
    }
    /**
     * 
     */
    onChangeText=(key,value)=>{
        this.setState({
            [key]:value
        });
    }
    /**
     * 
     */
    onPressIn =() => {
       
    }
  
    render() {
          return(
            <ScrollView style={{padding:20,backgroundColor:'#607d8b',flex:1}}>
                <Text  style={{fontSize:30,fontWeight:'bold',alignSelf:'auto',justifyContent:'center',color:'#fff'}}>
                    Registro
                 </Text>
                 <TextInput placeholder="Nombre" style={style.input} onChangeText={val=>this.onChangeText('name',val)} />
                 <TextInput  placeholder="Email" style={style.input} onChangeText={val=>this.onChangeText('email',val)}/>
                 <TextInput placeholder="Password" style={style.input} secureTextEntry={true} onChange={val=>this.onChangeText('password',val)}/>
                 <View width={100} left={115} >
                 <Button title='Registrar'  onPress={this.onPressIn} />
                 </View>
            </ScrollView>
        );
    }
}
const style=StyleSheet.create(colors.generalStyle);