import '../_mockLocation'; /// test component for location  
import React , {useContext , useCallback} from "react";
import {Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from 'react-navigation';
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {

    const { state : { recording } , addLocation } = useContext(LocationContext);
    
    const callback = useCallback((location) => {
        addLocation(location,recording); 
    } , [recording]);

    const [error] = useLocation(isFocused || recording ,callback);

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Create a Track</Text>
            <Map/>
            {error ? <Text>Please enable location services</Text> : null}
            <TrackForm />
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

export default withNavigationFocus(TrackCreateScreen);