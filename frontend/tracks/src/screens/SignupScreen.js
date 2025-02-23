import React from "react";
import {Text , StyleSheet} from "react-native";
import {Input,Button} from "react-native-elements";
import Spacer from "../components/Spacer"

const SignupScreen = ({navigation}) => {
    return (
        <>
            <Spacer>
                <Text style = {styles.headerText} >Sign Up for Tracker</Text>
            </Spacer>
            <Input label = "Email" />
            <Spacer/>
            <Input label = "Password" />
            <Spacer>
                <Button title = "Sign Up"/> 
            </Spacer>    
        </> 
    );

};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 32,  // Similar to h3 size
        fontWeight: "bold",  // Similar to h3 style
        marginBottom: 20,  // Similar spacing to h3 in the original component
    },
});

export default SignupScreen;