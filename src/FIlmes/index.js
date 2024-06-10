import React, { useEffect, useState } from 'react';
import { View, 
         Text,
         StyleSheet,
         Image, 
         TouchableOpacity,
         Modal } from 'react-native';

import Detalhes from '../Detalhes';

function Filmes({ data }){
    const [verModal, setVerModal] = useState(false);

    return(
        <View style={estilos.card}>
            <Text style={estilos.nome}>{data.nome}</Text>

            <Image source={{uri: data.foto}} style={estilos.foto} />

            <View style={estilos.areaBotao}>
                <TouchableOpacity style={estilos.botao} 
                                  onPress={() => setVerModal(true)}>
                    <Text style={estilos.botaoText}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType='slide' visible={verModal}>
                <Detalhes filme={ data } voltar={() => setVerModal(false)} />
            </Modal>
        </View>
    );
}

const estilos = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    nome:{
        padding: 15,
        fontSize: 18,
    },
    foto:{
        height: 250,
        zIndex: 2,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9,
    },
    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 10,
        padding: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoText:{
        color: '#fff',
        textAlign: 'center'
    },
});

export default Filmes;