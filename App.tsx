import Login from './src/Login';
import Cadastro from './src/Cadastro';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { temas } from './src/styles/temas'

export default function App() {
  return (

    //aqui estou provendo o css para meu componente Login
    <NativeBaseProvider theme={temas} >
      <StatusBar />
      {/* <Login /> */}
      <Cadastro />
    </NativeBaseProvider>
  );
}