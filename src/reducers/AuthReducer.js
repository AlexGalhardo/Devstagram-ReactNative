const initialState = {
   name:'',
   email:'',
   pass:'',
   status: 0
};

const AuthReducer = ( state = initialState, action) => {

   if (action.type == 'changeName') {
      return { ...state, name: action.payload.name };
   }

   if (action.type == 'changeEmail') {
      return { ...state, email: action.payload.email };
   }

   if (action.type == 'changePass') {
      return { ...state, pass: action.payload.pass };
   }

   if (action.type == 'changeStatus') {
      return { ...state, status: action.payload.status };
   }

   return state;
}

export default AuthReducer;