import Login from './src/Login';
import Cadastro from './src/Cadastro';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { temas } from './src/styles/temas'
import Rotas from './src/Rotas';

export default function App() {
  return (

    //aqui estou provendo o css para meu componente Login
    <NativeBaseProvider theme={temas} >
        <StatusBar backgroundColor={temas.color.blue[800]}/>
        <Rotas />
    </NativeBaseProvider>
  );
}