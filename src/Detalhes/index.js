import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Detalhes( props ){
    return(
        <View style={estilos.container}>

            <View style={estilos.modalContainer}>
                <TouchableOpacity style={estilos.btnVoltar}
                                  onPress={props.voltar}>
                    <Text style={estilos.voltar}>Voltar</Text> 
                </TouchableOpacity>

                <Text style={estilos.titulo}>{props.filme.nome}</Text>
                <Text style={estilos.tituloSinopse}>Sinopse</Text>
                <Text style={estilos.sinopse}>{props.filme.sinopse}</Text>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer:{
        width: '80%',
        height: '80%',
        backgroundColor: '#6b6565',
        borderTopRightRadius: 5,
    },
    btnVoltar:{
        backgroundColor: '#e52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    voltar:{
        color: '#fff',
        fontSize: 14,
    },
    titulo: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    tituloSinopse:{
        color: '#000',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    sinopse:{
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    }
});

export default Detalhes;