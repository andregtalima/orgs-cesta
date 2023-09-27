import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Font from "../../../components/Font";

export default function Detalhes({ name, logoFarm, nameFarm, description, price, buttom }) {
    return (
        <>
            <Font style={styles.name}>{name}</Font>
            <View style={styles.farm}>
                <Image source={logoFarm} style={styles.logo} />
                <Font style={styles.nameFarm}>{nameFarm}</Font>
            </View>
            <Font style={styles.description}>{description}</Font>
            <Font style={styles.price}>{price}</Font>

            <TouchableOpacity style={styles.buttom} onPress={() => {}}>
                <Font style={styles.textButtom}>{buttom}</Font>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        gap: 12,
        paddingVertical: 12,
    },
    logo: {
        width: 32,
        height: 32,
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    buttom: {
       marginTop: 16,
       backgroundColor: '#2A9F85',
       paddingVertical: 16,
       borderRadius: 6
    },
    textButtom: {
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    }
});