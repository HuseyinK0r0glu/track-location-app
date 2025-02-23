import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state,action) => {
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage : action.payload};
        default:
            return state;
    }
};

// action functions 

const signup = (dispatch) => {
    return async ({email , password}) => {
        try {
            // make api request to sign up with that email and password
            const response = await trackerApi.post('/signup' , { email , password });
            // if we sign up , modify our state and say that we are authenticated 
            console.log(response.data);
        }catch (err) {  
            // if signing up fails , we probably need to reflect an error message 
            dispatch({type : 'add_error' , payload : 'Something went wrong with sign up'})
        }

    };
};

const signin = (dispatch) => {
    return ({email , password}) => {
        // try to sign in 
        // handle success by updating state
        // handle failure by showing an error message 
    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const {Provider , Context} = createDataContext(
    authReducer,
    {signup , signin , signout},
    { isSignedIn : false , errorMessage : ''}
);