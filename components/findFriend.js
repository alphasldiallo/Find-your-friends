import React from 'react'
import {View,  Text, StyleSheet, TextInput} from 'react-native'
import Button from 'react-native-button'

class findFriend extends React.Component
{


    render(){
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text style={styles.head}>Create or join a cluster</Text>
                <Text>Find your friends</Text>
                <View>
                    <TextInput
                    style= {styles.inputText} placeholder="Enter your name"/>
                    <TextInput style = {styles.inputText} placeholder= "Enter a group name" />
                    <Button style = {styles.button} onPress = {() => navigate("live") }> Join a cluster </Button>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        head:
        {
            fontSize: 38,
            paddingBottom: 50
        },
        inputText:
        {
            padding: 20
        },
        button:
        {
            color: 'blue',
            fontSize: 20
        }
    }
)

export default findFriend