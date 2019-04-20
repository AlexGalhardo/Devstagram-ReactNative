import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, CameraRoll, Image, Platform, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

export class PhotoCameraGallery extends Component {
   static navigationOptions = {
      title: 'Galeria'
   }

   constructor(props) {
      super(props)
      this.state = {
         photos:[]
      };

      this.loadPhotos();
   }
   
   loadPhotos = async () => {
      
      if (await this.requestPermission()) {
         CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos'
         })
            .then((res) => {
               this.setState({ photos: res.edges });
            })
            .catch((err) => {
               alert(err);
            });
      } else {
         alert("ERRO 2");
      }
   }

   requestPermission = async () => {
      if (Platform.OS == 'android') {
         try {
            const granted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
               {
                  title: 'Acessar a Galeria',
                  message: 'Este aplicativo precisa de sua permissão para acessar a galeria.',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
               }
            );
            if (granted == PermissionsAndroid.RESULTS.GRANTED) {
               return true;
            } else {
               return false;
            }
         }
         catch (e) {
            alert(e)
         }
      } else {
         return true;
      }
   }
   
   render() {
      return (
         <ScrollView style={styles.container}>
            <View style={StyleSheet.photoArea} >
               {this.state.photos.map((obj, key)=>{
                  return (
                     <Image key={key} style={styles.img} source={{uri:obj.node.img.uri}} />
                  )
               })}
            </View>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000000'
   },
   img:{
      height: 100,
      width: 100
   },
   photoArea:{
      flexDirection: 'row',
      flexWrap: 'wrap'
   }
});

const mapStateToProps = (state) => {
   return {
      status: state.auth.status
   };
}

const PhotoCameraGalleryConnect = connect(mapStateToProps, { checkLogin })(PhotoCameraGallery);
export default PhotoCameraGalleryConnect;
