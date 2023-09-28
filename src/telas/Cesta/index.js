import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Font from '../../components/Font';

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <> 
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={({name}) => name}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo} />
                            <View style={styles.cesta}>
                                <Detalhes {...detalhes}/> 
                                <Font style={styles.title}>{itens.title}</Font>   
                            </View> 
                        </> 
                    )
                }}
            />              
        </>  
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20, 
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});

