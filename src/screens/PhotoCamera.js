import React, { Component } from 'react';
import { Image, View, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'
import CameraClose from '../components/Camera/CameraClose';

export class PhotoCamera extends Component {
   static navigationOptions = ({navigation}) =>({
      title: '',
      headerLeft: <CameraClose nav={navigation} />
   })
    
   constructor(props) {
      super(props)
      this.state = {
         cameraType: 'back',
         flashMode:'auto'
      }
   }

   flashClick = () => {
      let state = this.state;
     
         switch (this.state.flashMode) {
         case 'auto':
               this.state.flashMode = 'off';
         break;
         case 'off':
               this.state.flashMode = 'on';
         break;
         case 'on':
               this.state.flashMode = 'auto';
         break;
      }
      this.setState(state);
   }

   flipClick= () => {
      let state = this.state;
      switch (this.state.flashMode) {
         case 'back':
            this.state.flashMode = 'front';
         break;
         case 'front':
            this.state.flashMode = 'back';
         break;
      }
      this.setState(state);
   }

   galleryClick = () => {
      this.props.navigation.navigate('PhotoCameraGallery');
   }

   takePhotoClick = () => {

   }

    
   render() {
      let cameraWidth = Dimensions.get('window').width;
      let flashTypeImage = require('../assets/camera-flash-auto.png');
      
      if (this.state.flashMode== 'on') {
         flashTypeImage = require('../assets/camera-flash-on.png')
      } else if (this.state.flashMode == 'off') {
         flashTypeImage = require('../assets/camera-flash-off.png')
      }

      return (
         <View style={styles.container}>
            <View style={{ width: cameraWidth, height: cameraWidth, backgroundColor:'#333333'}}>
            
            </View>
            <View style={styles.controlArea}>
               <View style={styles.cameraControl}>
                  <View style={styles.cameraControlArea}>
                     <TouchableHighlight underlayColor={null} onPress={this.flashClick} style={styles.cameraControlTouch}>
                        <Image source={flashTypeImage} style={styles.cameraControlIcon}/>
                     </TouchableHighlight>
                  </View>
                  <View style={styles.cameraControlArea}>
                     <TouchableHighlight underlayColor={null} onPress={this.flipClick} style={styles.cameraControlTouch}>
                        <Image source={require('../assets/camera-flip.png')} style={styles.cameraControlIcon}/>
                     </TouchableHighlight>
                  </View>
               </View>
                  <View style={styles.cameraTypeArea}>
                  <TouchableHighlight onPress={this.takePhotoClick} style={styles.cameraTakepicture}>
                        <View style={styles.cameraTakepicture2}></View>
                     </TouchableHighlight>
                     <View style={styles.cameraGalleryArea }>
                        <TouchableHighlight underlayColor={null} onPress={this.galleryClick} style={styles.cameraControlTouch}>
                           <Image source={require('../assets/camera-gallery.png')} style={styles.cameraControlIcon}/>
                        </TouchableHighlight>
                     </View>
                  </View>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000000'
   },
   controlArea:{
      flex: 1
   },
   cameraControl:{
      height:50,
      flexDirection: 'row'
   },
   cameraControlArea:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   cameraControlIcon:{
      width: 40,
      height: 40
   },
   cameraTypeArea:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   cameraTakepicture:{
      width: 70,
      height: 70,
      borderRadius: 35,
      padding: 10,
      backgroundColor:'#999999'
   },
   cameraTakepicture2:{
      borderRadius: 30,
      backgroundColor:'#555555',
      flex: 1
   },
   cameraGalleryArea:{
      width: 50,
      height: 50,
      position: 'absolute',
      right: 20,
      justifyContent: 'center',
      alignItems: 'center'
   },
   cameraControlTouch:{
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

const mapStateToProps = (state) => {
   return {
      status: state.auth.status
   };
}

const PhotoCameraConnect = connect(mapStateToProps, { checkLogin })(PhotoCamera);
export default PhotoCameraConnect;
