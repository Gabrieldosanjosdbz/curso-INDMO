import { VStack, Text, ScrollView, Box, FormControl, Input } from "native-base";
import { Titulo } from "../components/Titulo";

const depoimentos = [
    {

    },
    {

    },
    {

    }
]

export default function Principal(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1}>
                <Titulo>Boas vindas!</Titulo>

                <Box width={"80%"} flex={1} alignSelf={"center"} >
                    <FormControl >
                        <Input placeholder="Digite a especialidade" mb={5} shadow={"2"}/>
                        <Input placeholder="Digite sua localização" />
                    </FormControl>
                </Box>

            </VStack>
        </ScrollView>
    )
}