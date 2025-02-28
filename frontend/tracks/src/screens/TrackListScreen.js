import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from './../context/TrackContext'

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={() => fetchTracks()} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => 
                            navigation.navigate('TrackDetail' , {_id : item._id})
                        }>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks',
    headerTitleAlign: 'center', 
    headerTitleStyle: {
        textAlign: 'center', 
        flex: 1 
    }
};

const styles = StyleSheet.create({});

export default TrackListScreen;