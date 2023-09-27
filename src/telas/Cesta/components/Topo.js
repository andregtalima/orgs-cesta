import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import topo from '../../../../assets/topo.png';

import Font from '../../../components/Font'

const width = Dimensions.get('screen').width

export default function Topo({ title }) {
    return (
        <>
            <Image source={topo} style={styles.top} />
            <Font style={styles.title}>{title}</Font>
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
})