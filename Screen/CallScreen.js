import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {} from 'native-base'

export default class CallScreen extends Component {
    render() {
        var {params}=this.props.navigation.state;
        return (
            <View>
                <Text>CALL</Text>
               <Text>PARAM: {params.name}</Text>
            </View>
        );
    }
}