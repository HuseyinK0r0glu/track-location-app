import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync , watchPositionAsync , Accuracy} from 'expo-location';

export default (callback) => {

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
          },
          /// here watchPositionAsync automatically provides the location when calling the callback. 
          callback 
        );
        } catch (e) {
          setError(e);
        }
      }; 

      useEffect(() => {
        startWatching();    
      }, []);

      // returning from a hook is done with array because of convention
      return [error];
};