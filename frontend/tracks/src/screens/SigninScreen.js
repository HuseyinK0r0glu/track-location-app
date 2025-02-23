import React    from "react";
import {View,Text,StyleSheet} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    return (
        <View style = {styles.container}>
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage=""
                onSubmit={() => {}}
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