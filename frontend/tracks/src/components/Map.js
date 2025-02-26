import React , {useContext} from "react";
import { Text , StyleSheet , ActivityIndicator } from 'react-native';
import MapView , {Polyline , Circle} from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {

    const {state : {currentLocation}} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style = {{marginTop:200}}/>
    }

    return (
        <MapView 
            style = {styles.map} 
            initialRegion = {{
                /// instead of hard coded latitude and longitude we use these from state
                ///latitude:37.33233,
                ///longitude:-122.03121,

                ...currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}    
            /// the region prop controls the current viewport of the map
            region = {{
                ...currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}
        >

            <Circle
                center = {currentLocation.coords}
                radius = {30}
                strokeColor = "rgba(158,158,255,1.0)"
                fillColor = "rgba(158,158,255,0.3)"
            />

        </MapView>
    );
};

const styles = StyleSheet.create({
    map : {
        height : 300 
    }
});

export default Map;