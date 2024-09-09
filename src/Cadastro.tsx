import { VStack, Image, Box, Checkbox } from 'native-base';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';


export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  const secoes = [
    {
      id: 1,
      titulo: "insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: "Email",
          placeholder: 'Digite seu email'
        }
      ],
      checkbox: []
    },

    {
      id: 2,
      titulo: "Agora mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
      ],
      checkbox: []
    },

    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      checkbox: [
        {
          id: 1,
          valor: 'Sulamerica'
        },
        {
          id: 2,
          valor: 'Unimed'
        },
        {
          id: 3,
          valor: 'Teste'
        },
      ],
    }

  ];

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
    <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Titulo color={"gray.400"} fontWeight={"bold"}>
        {secoes[numSecao].titulo}
      </Titulo>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {secoes[numSecao]?.entradaTexto?.map((ent) => {
          return <EntradaTexto label={ent.label} placeholder={ent.placeholder} key={ent.id} />;
        })}
      </Box>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {secoes[numSecao].checkbox.map(check => {
          return (<Checkbox key={check.id} value={check.valor} >
            {check.valor}
          </Checkbox>)
        }
        )}
      </Box>

      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor={"gray.400"}>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>
    </VStack>
  );
}
