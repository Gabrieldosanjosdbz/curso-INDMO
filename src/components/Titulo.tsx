import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TituloProps extends ITextProps {
    children: ReactNode
}

// Aqui "...rest" desestrutura todas as outras propriedades de props, exceto "texto" e guarda em um objeto chamado rest 
// se fizesse sem desestruturação, seria algo como: props; props.texto; {...PROPS}
export function Titulo({ children, ...rest }: TituloProps){
    return (
        <Text fontSize={'2xl'} fontWeight={"bols"} color={'gray.500'} textAlign={"center"} mt={5} {...rest}>
            { children }
        </Text>
    )
}