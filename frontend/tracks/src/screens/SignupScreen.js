import React , {useState , useContext} from "react";
import {View ,  Text , StyleSheet} from "react-native";
import {Input,Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext"; 

const SignupScreen = ({navigation}) => {
    const {state , signup} = useContext(AuthContext); 

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
            {state.errorMessage ? <Text style = {styles.errorMessage}>{state.errorMessage}</Text>: null}
            <Spacer>
                <Button 
                    title = "Sign Up"
                    onPress={() => signup({email , password})}
                /> 
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
    },
    errorMessage: {
        color: 'red',           
        fontSize: 16,           
        fontWeight: 'bold',        
        marginBottom: 8,
        marginLeft:15
    },
});

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignupScreen;