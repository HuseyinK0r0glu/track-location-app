import React from "react";
import {Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Create a Track</Text>
            <Map/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingHorizontal: 16,  
    },
    headerText: {
        /// h3 for texts from react-native-elements was giving error so I used this one
        fontSize: 32,  // Similar to h3 size
        fontWeight: "bold",  // Similar to h3 style
        marginBottom: 20,  // Similar spacing to h3 in the original component
    }
});

export default TrackCreateScreen;