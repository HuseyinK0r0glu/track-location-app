import React , {useState} from "react";
import {View ,  Text , StyleSheet} from "react-native";
import {Input,Button} from "react-native-elements";
import Spacer from "../components/Spacer"

const SignupScreen = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style = {styles.container} >
            <Spacer>
                <Text style = {styles.headerText} >Sign Up for Tracker</Text>
            </Spacer>
            {/* (newEmail) => {setEmail(newEmail);} is same as {setEmail}
            */}
            <Input 
                label = "Email" 
                value = {email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}    
            />
            <Spacer/>
            <Input 
                secureTextEntry = {true}
                label = "Password" 
                value = {password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}    
            />
            <Spacer>
                <Button title = "Sign Up"/> 
            </Spacer>    
        </View> 
    );

};

const styles = StyleSheet.create({
    headerText: {
        /// h3 for texts from react-native-elements was giving error so I used this one
        fontSize: 32,  // Similar to h3 size
        fontWeight: "bold",  // Similar to h3 style
        marginBottom: 20,  // Similar spacing to h3 in the original component
    },
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