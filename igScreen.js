import React from 'react';
import { StyleSheet, TextBase, View } from 'react-native';

export default class IgScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>
                    Welcome To Instagram.
                </Text>
            </View>
        )
    }
}