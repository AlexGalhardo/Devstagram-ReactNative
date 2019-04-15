import { AsyncStorage } from 'react-native';
import api from '../Api';
import { logout } from './AuthActions';

export const getFeed = () => {
   return(dispatch) => {

      dispatch({
         type: 'changeFeedLoadingStatus',
         payload: {
            status: true
         }
      });

      AsyncStorage.getItem('jwt')
      .then((data) => {
         if (data != null && data != '') {
            api.req({
               endpoint:'users/feed',
               method:'GET',
               data:{jwt:data},
               success:(json) => {
                  if (json.logged === true) {

                     dispatch({
                        type: 'changeFeedLoadingStatus',
                        payload: {
                           status: false
                        }
                     });

                     dispatch({
                        type: 'incrementFeed',
                        payload:{
                           feed:json.data
                        }
                     })
                     
                  } else {
                     dispatch(logout());
                  }
               },
               error:(error)=> {
                  alert(error)
               }
            });
         } else {
            dispatch(logout());
         }
      })
      .catch(() => {
         dispatch(logout());
      });
   };
};

//suporte@b7web.com.br
// 123456