import { VStack, Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';


export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
    // Define o texto do botão com base no valor de numSecao
    const botaoTexto = numSecao === 2 ? 'Cadastrar!' : 'Avançar';

  function avancarSecao() {
    if (numSecao < secoes.length - 1)
      setNumSecao(numSecao + 1);
  }

  function voltarSecao() {
    if (numSecao > 0)
      setNumSecao(numSecao - 1);
  }

  return (
    //p signfica padding
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo Voll' alignSelf={"center"}/>

      <Titulo color={"gray.400"} fontWeight={"bold"}>
        {secoes[numSecao].titulo}
      </Titulo>

      {/* "?.///?."  é uma logica de renderização para objetos não nulls*/}
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((ent) => {
          return <EntradaTexto label={ent.label} placeholder={ent.placeholder} key={ent.id} mt={2}/>;
        })}
      </Box>

      <Box>
        {secoes[numSecao].checkbox.length > 1 && <Text color={"blue.800"} fontSize={"md"} fontWeight={"bold"} mb={2} mt={2}>Selecione os planos: </Text>}
        {
          secoes[numSecao].checkbox.map(check => {
            return <Checkbox key={check.id} value={check.valor} >
              {check.valor}
            </Checkbox>
          })
        }
      </Box>

      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor={"gray.400"}>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>{botaoTexto}</Botao>
    </ScrollView>
  );
}
