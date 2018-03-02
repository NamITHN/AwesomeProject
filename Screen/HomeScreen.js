import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Button} from 'react-native'
import {Container, Header, Content, Icon, Body, Footer} from 'native-base';
import {StackNavigator} from 'react-navigation'
import CallScreen from "./CallScreen";
import ChatScreen from "./ChatScreen";
import TabScreen from "./TabScreen";

StackNavigator({
    Call: {
        screen: CallScreen
    },
    Chat: {screen: ChatScreen},
    Tab:{screen:TabScreen},
});
export default class HomeScreen extends React.Component {

    render() {
        var {navigate} = this.props.navigation;
        return (
            <Container>
                <Header>

                    <Content>
                        <Text>Header</Text>
                        <Icon name='home' onPress={() => {
                            this.props.navigation.navigate('DrawerOpen')
                        }}/>
                        <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                    </Content>
                </Header>
                <Body>

                <TouchableOpacity>
                    <Text ref={'text'}>Body</Text>

                </TouchableOpacity>
                <Button onPress={() => {
                    navigate('Call', {name: 'Nam'})
                }} title={'Chuyen'}></Button>
                </Body>
                <Footer>
                    <Text>Footer</Text>
                </Footer>

            </Container>
        );
    }
}