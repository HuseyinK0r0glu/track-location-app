import React , {useContext} from "react";
import {View , StyleSheet} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({navigation}) => {
    
    const {state , signup ,clearErrorMessage} = useContext(AuthContext);

    return (
        <View style = {styles.container} >

            <NavigationEvents onWillFocus={clearErrorMessage}/>

            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({email,password}) => signup({email,password})}
            />

            <NavLink
                text = "Already have an account? Sign in instead"  
                routeName="Signin"
            />

        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        marginBottom : 200
    }
});

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignupScreen;