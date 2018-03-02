import React, {Component} from 'react';
import {} from 'react-native';
import {Header, Body, Icon,} from 'native-base';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
         this.props.press=this.props.onPress.bind(this)
    }

    render() {
        return (
            <Header style={{backgroundColor: 'orange'}}>
                <Body style={{flexDirection: 'row'}}>
                <Icon name={'home'} android='md-menu' ios='ios-menu' style={{color: 'white'}} OnPress={()=>{this.props.press}} />
                </Body>
            </Header>
        );
    }
}