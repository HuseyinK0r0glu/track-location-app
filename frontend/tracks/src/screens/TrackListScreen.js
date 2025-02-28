import React, { useContext } from "react";
import { View , Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from './../context/TrackContext'

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <View style = {styles.container}>
            <NavigationEvents onWillFocus={() => fetchTracks()} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => 
                            navigation.navigate('TrackDetail' , {_id : item._id})
                        }>
                            <ListItem containerStyle={styles.listItem} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5", // Light background
        paddingTop: 10, 
      },
      listItem: {
        backgroundColor: "#fff", 
        borderRadius: 8, 
        marginHorizontal: 10,
        marginVertical: 5, 
        paddingVertical: 12, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4, 
        elevation: 3, 
      },
      title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333", 
      },
});

export default TrackListScreen;