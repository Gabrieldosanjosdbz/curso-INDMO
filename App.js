import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Filmes from './src/FIlmes';
import api from './src/services/api';

const app = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function lerFilmes(){
      const resposta = await api.get('r-api/?api=filmes');
      setFilmes(resposta.data);
      setLoading(false)
    };

    lerFilmes();
  }, []);

  if(loading){
    <View style={estilos.loading}>
      <ActivityIndicator style={estilos.act}/>
    </View>
  }
  else {
    return (
      <View style={estilos.container}>
        <FlatList data={filmes} 
                  keyExtractor={item => (item.id)} 
                  renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
  },
  act: {
    size: 'large',

  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})