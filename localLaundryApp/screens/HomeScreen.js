import { StyleSheet, Text, View,SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"

const HomeScreen = () => {
    const [displayCurrentAddress,setdisplayCurrentAddress] = useState("We are loading your location");
    const [locationServiceEnabled,setLocationServiceEnabled] = useState(false);
    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    },[]);
    const checkIfLocationEnabled = async () =>{
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled){
            Alert.alert('Location services not enabled', 'Please enable the location services', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }else{
            setLocationServiceEnabled(enabled)
        }
    }
    const getCurrentLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== "granted"){
            Alert.alert('Permission Denied', 'Allow the app to use the location services', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        };
    
    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords)
    if(coords){
        const{latitude, longitude} = coords;
        let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
        });
        console.log(response)
        for(let item of response){
            let address = `${item.name} ${item.city} ${item.postalCode}`;
            setdisplayCurrentAddress(address)
        }
    }
};
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})