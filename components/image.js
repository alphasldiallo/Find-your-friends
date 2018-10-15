import React from "react"
import {StyleSheet, Text, Image, View, ImageBackground, Button} from "react-native"
import {Font} from "expo"
import navigation from "react-navigation"

class Img extends React.Component{

    static navigationOptions = {
        title: 'Homepage',
      }

   _navigateToFindFriend = () =>
   {
       console.log(this.props.navigation)
   }

    render()
    {
        const { navigate } = this.props.navigation

        return(
    <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/bg.jpg')} >
          <View style= {styles.content}>
            <View style= {styles.img_view}>
                <Image source={require('../assets/logo.png')} style={styles.img}></Image>
            </View>
            <Text style= {styles.mainTitle }>Matchmore Festival</Text>
                <Text style= {styles.heading2}> Rock your life </Text>
                    <Button title="Find your friends" onPress={() => navigate('findFriend', {name : "find_Friend"})} style= {styles.btn}  />
                    <Button title="Festival Guide" onPress= {() => navigate('beacon', {name : "Beacons"})} ></Button>
            
            </View>
            </ImageBackground>
    </View>
        )
    }

}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column"
    },
    img:
    {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    img_view:
    {
        alignItems:"center",
        justifyContent:'center'
    },
    backgroundImage:
    {
        opacity: 1,
        width: "100%",
        height: "100%",
        justifyContent:"center",
        flexDirection: "column"
    },
    btn:{

    },
    content:
    {
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        opacity: 0.9
    },
    mainTitle:
    {
        fontSize: 40,
        textAlign: "center"
    },
    heading2:
    {
        textAlign: "center",
        fontSize: 20,
        fontStyle:"italic",
        marginBottom: 10,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    text:
    {
        justifyContent: "center"
    }
})

export default Img