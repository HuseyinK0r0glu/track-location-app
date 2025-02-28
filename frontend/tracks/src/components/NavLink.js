import React from "react";
import {Text,TouchableOpacity,StyleSheet} from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

/// Normally, only screens inside a navigator receive the navigation prop. If you have a child component we use withNavigation to automatically inject the navigation prop instead of passing it to children from the parent

const Navlink = ({navigation , text , routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style = {styles.link}>{text}</Text>    
            </Spacer>
        </TouchableOpacity>  
    );
};

const styles = StyleSheet.create({
    link : {
        color : 'blue'
    }
});

export default withNavigation(Navlink);
