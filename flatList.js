import React from "react";
import {View, FlatList, Text} from 'react-native';
import frutas from './frutas'

const ListaFrutas = () => {
    return (
        <FlatList 
            data={frutas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style = {{padding: 10, marginTop: 50}}>
                    <Text>{item.nome}</Text>
                </View>
            )}
        />
    );
}

export default ListaFrutas