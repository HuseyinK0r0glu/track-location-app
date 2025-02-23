import React , {useState} from "react";
import {Text,StyleSheet} from "react-native";
import {Input , Button} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText , errorMessage , onSubmit , submitButtonText }) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text style = {styles.headerText} >{headerText}</Text>
            </Spacer>
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
            {errorMessage ? <Text style = {styles.errorMessage}>{errorMessage}</Text>: null}
            <Spacer>
                <Button 
                    title = {submitButtonText}
                    onPress={() =>  onSubmit({email , password})}
                /> 
            </Spacer>
        </>
    );

};

const styles = StyleSheet.create({
    headerText: {
        /// h3 for texts from react-native-elements was giving error so I used this one
        fontSize: 32,  // Similar to h3 size
        fontWeight: "bold",  // Similar to h3 style
        marginBottom: 20,  // Similar spacing to h3 in the original component
    },
    errorMessage: {
        color: 'red',           
        fontSize: 16,           
        fontWeight: 'bold',        
        marginBottom: 8,
        marginLeft:15
    }
});

export default AuthForm;