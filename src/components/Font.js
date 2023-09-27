import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Font({ children, style }) {
    let _style = styles.font;

    if (style?.fontWeight === 'bold') {
        _style = styles.fontBold;
    }

    return(
        <Text style={[style, _style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'montserratRegular',
        fontWeight: 'normal'
    },
    fontBold: {
        fontFamily: 'montserratBold',
        fontWeight: 'normal'
    }
});