import React , {useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Button} from "react-native-elements";   
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {

    const {signout} = useContext(AuthContext);
 
    return (
        <SafeAreaView style={styles.container}>
            <Text style = {{fontSize : 48}}>AccountScreen</Text>
            <Spacer>
                <Button title = "Sign Out" onPress = {signout}/>    
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingHorizontal: 16,  
    },
});

AccountScreen.navigationOptions = {
    title : 'Account',
    tabBarIcon : <FontAwesome name = "gear" size = {20} />
};

export default AccountScreen;