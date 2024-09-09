import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';

export default function Login({ navigation }) {
  return (
    //p signfica padding
    <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll'/>

      <Titulo color={"gray.400"} fontWeight={"bold"}>
        Por favor faça seu login
      </Titulo>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder='Insira seu endereço de email' size={'lg'} w={'100%'} borderLeftRadius={'lg'} bgColor={'gray.100'} shadow={3}/>
        </FormControl>

        {/* mt é margin top */}
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Insira sua senha' size={'lg'} w={'100%'} borderLeftRadius={'lg'} bgColor={'gray.100'} shadow={3}/>
        </FormControl>
      </Box>
      <Button w={'100%'} bg={"blue.800"} mt={10} borderRadius={"lg"}>
        Entrar
      </Button>
      <Link href='https://www.alura.com.br' mt={2}>Esqueceu sua senha?</Link>

      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
        <Text>Ainda não tem cadastro?  </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color={"blue.500"}>Faça seu cadastro </Text>
        </TouchableOpacity> 
      </Box>
    </VStack>
  );
}