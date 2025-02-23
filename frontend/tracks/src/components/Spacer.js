import React from "react";
import {View , Text , StyleSheet} from "react-native";

const Spacer = ({children}) => {
    return <View style = {styles.spacer}>{children}</View>
};

const styles = StyleSheet.create({
    spacer : {
        margin : 10
    }
});

export default Spacer;