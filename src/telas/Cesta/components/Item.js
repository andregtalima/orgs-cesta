import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Font from "../../../components/Font";

export default function Item({item: {name, image}}) {
    return <View style={styles.item}>
            <Image source={image} style={styles.image}/>
            <Font style={styles.name}>{name}</Font>
        </View>
}

const styles = StyleSheet.create({    
    item: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
    },
})