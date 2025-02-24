import React , {useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {

    const {state,signin,clearErrorMessage} = useContext(Context);

    return (
        <View style = {styles.container}>
            {/* 
                NavigationEvents lets you listen to events such as when the screen is focused, unfocused, or when navigation actions like "navigate" or "goBack" occur.
            */}
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={({email,password}) => signin({email,password})}
                submitButtonText="Sign in"
            />
            <NavLink 
                text="Don't have an acoount? Sign Up instead"
                routeName="Signup"
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

SigninScreen.navigationOptions = () => {
    return {
        headerShown : false,
    };
};

export default SigninScreen;