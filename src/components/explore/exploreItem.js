import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

let squareWidth = Dimensions.get('window').width / 3;

export class ExploreItem extends Component {

   render() {
      return (
         <View style={exploreStyle.square}>
         <Text>...</Text>
         </View>
      )
   }

}

const exploreStyle = StyleSheet.create({
   square: {
      width: squareWidth,
      height: squareWidth,
      backgroundColor: '#00FF00',
   }
});
