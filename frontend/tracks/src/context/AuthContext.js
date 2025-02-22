import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state,action) => {
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage : action.payload};
        case 'signup':
            return {errorMessage : '',token:action.payload};
        case 'signin':
            return {errorMessage : '' , token:action.payload};
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
            // whenever a user refreshs the app the user has to sign in again because all contexts states are refreshed to solve that we are going to save the token that we got from api if we succesfully sign up then we are going to AsyncStorage to save that 
            await AsyncStorage.setItem('token' , response.data.token);
            dispatch({type : 'signup' , payload : response.data.token});
            // navigate to main flow
            navigate('TrackList');
        }catch (err) {  
            // if signing up fails , we probably need to reflect an error message 
            dispatch({type : 'add_error' , payload : 'Something went wrong with sign up'})
        }
    };
};

const signin = (dispatch) => {
    return async ({email , password}) => {
        // handle success by updating state
        // handle failure by showing an error message 
        try {
            // try to sign in 
            const response = await trackerApi.post('/signin', {email,password});
            await AsyncStorage.setItem('token' , response.data.token);
            dispatch({type : 'signin' , payload : response.data.token})
            navigate('TrackList');
        }catch (err) {
            console.log(error);
            dispatch({type : 'add_error' , payload : 'Something went wrong with sign in'});
        }
    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const {Provider , Context} = createDataContext(
    authReducer,
    {signup , signin , signout},
    { token : null , errorMessage : ''}
);