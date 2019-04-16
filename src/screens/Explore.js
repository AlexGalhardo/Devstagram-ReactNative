import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'
import { ExploreItem } from '../components/explore/exploreItem';

export class Explore extends Component {
   static navigationOptions = {
      title: 'Explore'
   }

   constructor(props) {
      super(props)
      this.state = {
         lista:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      };
   }

   render() {
      return (
         <View style={styles.container}>
            <FlatList 
               style={styles.lista}
               numColumns={3}
               data={this.state.lista}
               renderItem={()=><ExploreItem />}
            />
         </View>
      )
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   lista:{
      backgroundColor: '#FF0000',
      width:'100%',
      height:'100%'
   }
});

const mapStateToProps = (state) => {
   return {
      status: state.auth.status
   };
}

const ExploreConnect = connect(mapStateToProps, { checkLogin })(Explore);
export default ExploreConnect;
