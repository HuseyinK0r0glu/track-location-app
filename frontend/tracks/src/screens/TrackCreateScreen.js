import React , {useEffect , useState} from "react";
import {Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from "../components/Map";

const TrackCreateScreen = () => {

    const [error , setError] = useState(null);

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setError(e);
        }
      }; 

      useEffect(() => {
        startWatching();    
      }, []);

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Create a Track</Text>
            <Map/>
            {error ? <Text>Please enable location services</Text> : null}
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