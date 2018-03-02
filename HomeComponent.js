import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native';


export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : 'Nam',
            age: this.props.age? this.props.age : "21",
            list:[
                {},
                {},
                ]
        }
    }


    render() {
        return (
            <View>
                <Text>name: {this.state.name} and age: {this.props.age}</Text>
            </View>
        );
    }

}
