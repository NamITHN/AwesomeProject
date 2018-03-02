import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {Container,Tabs,Tab,TabHeading,Header,Icon,Footer,FooterTab,Button} from 'native-base'
import TabOne from './TabOne'
import TabTwo from './TabTwo'
export default class TabScreen extends Component{
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="camera" /><Text style={{color:'white'}}>Camera</Text></TabHeading>}>
                        <TabOne />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                        <TabOne />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                        <TabTwo />
                    </Tab>

                </Tabs>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name={'apps'}/>
                            <Text>App</Text>
                        </Button>

                        <TabTwo/>
                    </FooterTab><FooterTab>
                        <Text>Camera</Text>
                    </FooterTab><FooterTab>
                        <Text>App</Text>
                    </FooterTab>
                </Footer>
            </Container>

        );
    }
}