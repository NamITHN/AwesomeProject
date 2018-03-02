
import React ,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Icon,Body,Footer } from 'native-base';
export  default class HomeScreen extends React.Component{

    render(){
        return(
            <Container>
                <Header>

                    <Content>
                        <Text >Header</Text>
                        <Icon name='home'onPress={()=>{
                            this.props.navigation.navigate('DrawerOpen')
                        }} />
                        <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                    </Content>
                </Header>
                <Body>

                <TouchableOpacity onPress={()=>{alert(this.refs.text.);}}>
                    <Text ref={'text'}>Body</Text>
                </TouchableOpacity>

                </Body>
                <Footer>
                    <Text>Footer</Text>
                </Footer>

            </Container>
        );
    }
}