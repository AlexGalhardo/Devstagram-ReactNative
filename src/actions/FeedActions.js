import { AsyncStorage } from 'react-native';
import api from '../Api';
import { logout } from './AuthActions';

export const getFeed = () => {
   return(dispatch) => {

      AsyncStorage.getItem('jwt')
      .then((data) => {
         if (data != null && data != '') {
            api.req({
               endpoint:'users/feed',
               method:'GET',
               data:{jwt:data},
               success:(json) => {
                  if (json.logged === true) {
                     
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