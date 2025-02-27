import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync , watchPositionAsync , Accuracy} from 'expo-location';

export default (shouldTrack,callback) => {

    const [error , setError] = useState(null);
    const [subscriber , setSubscriber] = useState(null);  

    const startWatching = async () => {
        try {
          /// command for reseting permission settings in android emulator  
          /// adb shell pm reset-permissions 
          const { granted } = await requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval : 10
          },
          /// here watchPositionAsync automatically provides the location when calling the callback. 
          callback 
        );
        setSubscriber(sub);
        } catch (e) {
          setError(e);
        }
      }; 

      useEffect(() => {
        if(shouldTrack){
          startWatching();    
        }else {
          // stop watching 
          subscriber.remove();
          setSubscriber(null);
        }

        // before running the new effect , React automatically calls the cleanup function from the previous effect 
        // subscriber is removed before creating a new one
        
        return () => {
          if(subscriber) {
            subscriber.remove();
          }
        };

      }, [shouldTrack , callback]);

      // returning from a hook is done with array because of convention
      return [error];
};