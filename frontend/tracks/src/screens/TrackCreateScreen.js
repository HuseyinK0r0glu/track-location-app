import '../_mockLocation'; /// test component for location  
import React , {useEffect , useState , useContext} from "react";
import {Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync , watchPositionAsync , Accuracy} from 'expo-location';
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext);
    const [error , setError] = useState(null);

    const startWatching = async () => {
        try {
          /// command for reseting permission settings in android emulator  
          /// adb shell pm reset-permissions 
          const { granted } = await requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval : 10
          } , (location) => {
            addLocation(location);
          });
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