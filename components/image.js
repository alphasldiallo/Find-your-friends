import React from "react"
import {StyleSheet, Text, Image, View, ImageBackground, Button} from "react-native"
import {Font} from "expo"
import navigation from "react-navigation"

class Img extends React.Component{

    static navigationOptions = {
        title: 'Welcome',
      }

   _navigateToFindFriend = () =>
   {
       console.log(this.props.navigation)
   }

    render()
    {
        const { navigate } = this.props.navigation

        return(
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/applause.jpg')} >
          <View style= {styles.content}>
          <Text style= {styles.mainTitle }>Matchmore Festival</Text>
          <Text style= {styles.heading2}> Rock your life </Text>
                <Button title="Find your friends" onPress={() => navigate('findFriend', {name : "find_Friend"})} style= {styles.btn}  />
                <Button title="Festival Guide" onPress= {() => navigate('beacon', {name : "Beacons"})} ></Button>

          </View>
        </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    backgroundImage:
    {
        flex:1,
        opacity: 0.7,
        width: "100%",
        height: "100%"
    },
    btn:{

    },
    content:
    {
        flex:2,
        flexDirection: "column",
        justifyContent: "center"
    },
    mainTitle:
    {
        fontSize: 40,
        textAlign: "center"
    },
    heading2:
    {
        textAlign: "center",
        fontSize: 30
    },
    text:
    {
        justifyContent: "center"
    }
})

export default Img