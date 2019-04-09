const initialState = {
   email:'',
   senha:'',
   status: 0
};

const AuthReducer = ( state = initialState, action) => {

   if (action.type == 'changeEmail') {
      return { ...state, email: action.payload.email };
   }

   if (action.type == 'changeStatus') {
      return { ...state, status: action.payload.status };
   }
   return state;
}

export default AuthReducer;