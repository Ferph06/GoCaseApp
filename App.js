import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import Tabs from './src'
import {colors} from './src/constants'
type Props = {};
export default class App extends Component {
    render() {
        return ( 
            <Tabs style={styles.container}
                        
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
                backgroundColor:colors.primary
            ,flex:1
    }
});
