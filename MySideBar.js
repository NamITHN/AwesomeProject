import React, {Component} from 'react'

import {Text, View, FlatList, TouchableOpacity} from 'react-native'


export default class MySideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: menuList
        }
    }

    render() {
        var {navigate} =  this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <FlatList
                    style={{flex: 1, backgroundColor: 'red'}}

                    data={this.state.menus}
                    renderItem={({item}) =>
                        <View style={{flexDirection: 'row'}}>

                                <Text onPress={()=>{
                                    navigate(item.name);
                                }}>{item.name}</Text>


                        </View>

                    }

                />

            </View>
        );
    }
}
menuList = [
    {
        key: '1',
        name: 'Home'
    },
    {
        key: '1',
        name: 'Chat'
    },
    {
        key: '1',
        name: 'Call'
    }
]