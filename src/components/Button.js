import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Font from "./Font";

export default function Buttom({ children }) {

    return (
        <>   
            <TouchableOpacity style={styles.buttom} onPress={() => {}}>
                <Font style={styles.textButtom}>{children}</Font>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create ({
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
     },
});