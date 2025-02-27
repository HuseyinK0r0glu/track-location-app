import { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {

  const [error, setError] = useState(null);

  useEffect(() => {

    // instead of using state outside of the useEffect we use it like that because we have references to that in our functions
    let subscriber;

    // when we use useEffect we put our functions that we call from useEffect inside useEffect so we can see which props we need in dependency list of useEffect more easily

    const startWatching = async () => {
      try {
        /// command for reseting permission settings in android emulator  
        /// adb shell pm reset-permissions 
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error('Location permission not granted');
        }
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
          /// here watchPositionAsync automatically provides the location when calling the callback. 
          callback
        );
      } catch (e) {
        setError(e);
      }
    };


    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching 
      if(subscriber){
        subscriber.remove();
      }
      subscriber = null;
    }

    // before running the new effect , React automatically calls the cleanup function from the previous effect 
    // subscriber is removed before creating a new one

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };

  }, [shouldTrack, callback]);

  // returning from a hook is done with array because of convention
  return [error];
};