import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class live extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
            <Text>This is my Map</Text>
          </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default live