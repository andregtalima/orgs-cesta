import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={styles.top}/>
            <Text style={styles.title}>Detalhe da cesta</Text>

            <View style={styles.cesta}>
                <Text style={styles.name}>Cesta de Verduras</Text>
                <View>
                    <Image />
                    <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
                <Text style={styles.price}>R$40,00</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#FFF',
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
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
    }
});