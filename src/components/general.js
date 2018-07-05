import  React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native' 

export default class Componentes extends React.Component{
    
    typeComponent=[''];

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{zIndex:1000
            ,shadowOffset:{height:100,width:100},
            justifyContent:'center'
            }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }



}