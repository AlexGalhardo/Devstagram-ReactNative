import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { checkLogin } from '../actions/AuthActions';
import { getFeed } from '../actions/FeedActions';

export class Feed extends Component {
   static navigationOptions = {
      title: 'PhotoSphere'
   }

   constructor(props) {
      super(props)
      this.state = {}
   }

   componentDidMount() {
      this.props.getFeed();
   }

   ComponentDidUpdate() {
      this.verifyStatus();
   }

   verifyStatus = () => {
      if (this.props.status === 2) {
         this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            key: null,
            actions: [
               NavigationActions.navigate({ routeName: 'Login' })
            ]
         }));
      }
   }

   render() {
      return (
         <View style={styles.container}>
            <Text>Feed de Fotos</Text>
         </View>
      )
   }
   
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

const mapStateToProps = (state) => {
   return {
      status: state.auth.status,
      feed: state.feed.feed
   };
}

const FeedConnect = connect(mapStateToProps, { checkLogin, getFeed })(Feed);
export default FeedConnect;
