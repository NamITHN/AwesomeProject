import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {Header,Container,Input,Item,Button,Icon} from 'native-base'


export default class ChatScreen extends Component {
    static app={
        title:'chat',
    };
    render() {
        return (
            <Container>
                <Header>
                    <Text>Chat App</Text>
                </Header>
                <View style={{flexDirection:'column'}}>
                    <Text>CHAT</Text>

                    <Item rounded>
                        <Button title={'Ok'}></Button>
                        <Input placeholder='Rounded Textbox'/>
                    </Item>
                    <Item>
                        <Input placeholder={'input name'}></Input>
                        <Icon active name={'home'}></Icon>
                    </Item>

                </View>
            </Container>

        );
    }
}