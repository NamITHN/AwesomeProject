import React, {Component} from 'react'
import {
    Button,
    DatePickerAndroid,
    FlatList,
    Image,
    Picker,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    View,
    ScrollView,
    Dimensions


} from 'react-native'
import {Drawer} from 'native-base'

import HeaderComponent from "./HeaderComponent";
import MySideBar from "./MySideBar";

export default class AppHello extends Component {

    constructor(props) {
        super(props)
        this.state = {text: 'Nguyen Thanh Nam', language: 'englrrish', devicess: devices, employeess: employees}
    }

    async datePiker() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    test() {
        //ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT)
        // alert("ok")
        ToastAndroid.showWithGravityAndOffset('A Songoky appeared nearby !', ToastAndroid.SHORT, ToastAndroid.CENTER, 100, 100)
    }
    closeDrawer = () => {
        this._drawer._root.close()
    };
    openDrawer = () => {
        this._drawer._root.open()
    };
    render() {
        var screenWidth = Dimensions.get('window').width;

        return (

            <View style={{backgroundColor: 'white', flex: 1}}>
                <HeaderComponent onPress={() => {
                    alert("ok")
                }}/>


                <Drawer
                    ref={(ref) => {
                    this._drawer = ref;
                    }}
                    content={<MySideBar navigator={this._navigation}/>}
                    onClose={() => this.closeDrawer()}>

                </Drawer>

                {/*<Text>Hello</Text>*/}

                {/*<Text numberOfLine={5}>Nam Thanh nguyen Code Android React</Text>*/}

                {/*<Text style={{fontWeight: 'bold'}}>*/}
                {/*Hello*/}
                {/*<Text style={{color: 'red'}}>*/}
                {/*World*/}
                {/*</Text>*/}

                {/*</Text>*/}
                <View style={{flexDirection: 'row'}}>
                    <Button style={{margin: 10}}
                            title={'Click'}
                            testID={'btnClick'}
                            onPress={() => this.openDrawer()}
                    />
                    <Button

                        onPress={() => this.datePiker()}
                        title={'ok'}
                        testID={'btnOk'}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 50, height: 50}}
                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}>
                    </Image>

                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'http://www.codebind.com/wp-content/uploads/2016/06/android-logo.jpg'}}>

                    </Image>


                </View>
                {/*<TextInput*/}
                {/*//  style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                {/*onChangeText={(text) => this.setState({text})}*/}
                {/*// value={this.state.text}*/}
                {/*/>*/}
                {/*<Text>Nhap Ho ten</Text>*/}
                {/*<TextInput*/}
                {/*{...this.props}*/}
                {/*editable={true}*/}
                {/*maxLength={900}*/}
                {/*multiline={true}*/}
                {/*numberOfLine={4}*/}
                {/*/>*/}

                <View style={{backgroundColor: 'red', height: 100, flexDirection: 'row'}}>
                    <View style={styles.header}>
                        <Image style={{width: 50, height: 50}}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}>
                        </Image>


                    </View>
                    <View style={styles.body}>
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: 'http://www.codebind.com/wp-content/uploads/2016/06/android-logo.jpg'}}>

                        </Image>
                    </View>
                    <View style={styles.bottom}>
                        <Image
                            style={{width: 50, height: 50, resizeMode: 'contain', flex: 1}}
                            source={{uri: 'data:image/png;base64,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'}}>

                        </Image>
                    </View>
                    <Text> Language</Text>

                </View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>

                <ScrollView style={{flex: 1}} horizontal={true} pagingEnabled={true}>
                    <View style={{flexDirection: 'column', flex: 1, width: screenWidth}}>

                        <Button
                            title={'Add'}
                            onPress={() => {
                                this.state.devicess.push({
                                    key: '1',
                                    image: 'http://www.codebind.com/wp-content/uploads/2016/06/android-logo.jpg',
                                    name: 'Android',
                                    price: 'free'
                                })
                                this.setState({
                                    data: this.state.devicess,

                                });
                                this.refs.l1.scrollToEnd()
                            }}
                        />
                        <FlatList
                            ref={"l1"}
                            style={{flex: 1}}
                            data={this.state.devicess}

                            renderItem={({item}) =>

                                <View style={{flexDirection: 'row'}}>

                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: item.image}}
                                    />
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.price}</Text>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, width: screenWidth}}>
                        <Button
                            title={'Add'}
                            onPress={() => {
                                this.state.employeess.push({
                                    key: '1',
                                    image: 'https://i.ytimg.com/vi/NvIBkMAIvV0/maxresdefault.jpg',
                                    name: 'werewolves',
                                    age: '20'
                                })
                                this.setState({
                                    data: this.state.employeess,

                                });
                                this.refs.l2.scrollToEnd()
                            }}
                        />
                        <FlatList
                            ref={"l2"}
                            style={{flex: 1}}
                            data={this.state.employeess}

                            renderItem={({item}) =>

                                <View style={{flexDirection: 'row'}}>

                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: item.image}}
                                    />
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.age}</Text>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </ScrollView>

                {/*<View style={{flex: 2, flexDirection: 'row'}}>*/}
                {/*<View style={{flexDirection: 'column', flex: 1}}>*/}

                {/*<Button*/}
                {/*title={'Add'}*/}
                {/*onPress={() => {*/}
                {/*this.state.devicess.push({*/}
                {/*key: '1',*/}
                {/*image: 'http://www.codebind.com/wp-content/uploads/2016/06/android-logo.jpg',*/}
                {/*name: 'Android',*/}
                {/*price: 'free'*/}
                {/*})*/}
                {/*this.setState({*/}
                {/*data: this.state.devicess,*/}

                {/*});*/}
                {/*this.refs.l1.scrollToEnd()*/}
                {/*}}*/}
                {/*/>*/}
                {/*<FlatList*/}
                {/*ref={"l1"}*/}
                {/*style={{flex: 1}}*/}
                {/*data={this.state.devicess}*/}

                {/*renderItem={({item}) =>*/}

                {/*<View style={{flexDirection: 'row'}}>*/}

                {/*<Image*/}
                {/*style={{width: 50, height: 50}}*/}
                {/*source={{uri: item.image}}*/}
                {/*/>*/}
                {/*<View style={{flexDirection: 'column'}}>*/}
                {/*<Text>{item.name}</Text>*/}
                {/*<Text>{item.price}</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*}*/}
                {/*/>*/}
                {/*</View>*/}


                {/*<View style={{flexDirection: 'column', flex: 1}}>*/}
                {/*<Button*/}
                {/*title={'Add'}*/}
                {/*onPress={() => {*/}
                {/*this.state.employeess.push({*/}
                {/*image: 'https://i.ytimg.com/vi/NvIBkMAIvV0/maxresdefault.jpg',*/}
                {/*name: 'werewolves',*/}
                {/*age: '20'*/}
                {/*})*/}
                {/*this.setState({*/}
                {/*data: this.state.employeess,*/}

                {/*});*/}
                {/*this.refs.l1.scrollToEnd()*/}
                {/*}}*/}
                {/*/>*/}
                {/*<FlatList*/}
                {/*ref={"l1"}*/}
                {/*style={{flex: 1}}*/}
                {/*data={this.state.employeess}*/}

                {/*renderItem={({item}) =>*/}

                {/*<View style={{flexDirection: 'row'}}>*/}

                {/*<Image*/}
                {/*style={{width: 50, height: 50}}*/}
                {/*source={{uri: item.image}}*/}
                {/*/>*/}
                {/*<View style={{flexDirection: 'column'}}>*/}
                {/*<Text>{item.name}</Text>*/}
                {/*<Text>{item.age}</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*}*/}
                {/*/>*/}
                {/*</View>*/}

                {/*</View>*/}


            </View>

        );

    }

}

var devices = [
    {
        key: '1',
        image: 'http://www.codebind.com/wp-content/uploads/2016/06/android-logo.jpg',
        name: 'Android',
        price: 'free'
    },
    {
        key: '1',
        image: 'data:image/png;base64,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',
        name: 'IOS',
        price: '20$'
    },
    {
        key: '1',
        image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        name: 'React-native',
        price: 'free'
    }
]
var employees = [
    {
        key: '2',
        image: 'https://i.ytimg.com/vi/NvIBkMAIvV0/maxresdefault.jpg',
        name: 'werewolves',
        age: '20'
    },
    {
        key: '3',
        image: 'data:image/jpeg;base64,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',
        name: 'bruceLee',
        age: '21'
    },
    {
        key: '4',
        image: 'data:image/jpeg;base64,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',
        name: 'Donnie Yen',
        age: '22'
    }
]
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 1,
        backgroundColor: '#E91E63',
        margin: 'auto'
    },
    body: {
        flex: 1,
        backgroundColor: 'orange'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'green'
    }

});