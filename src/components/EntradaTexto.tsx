import { FormControl, Input, ITextProps } from "native-base";

interface Props extends ITextProps{
    label: string
    placeholder: string
}

export function EntradaTexto({ label, placeholder, ...rest }: Props){
    return(
        <FormControl {...rest}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input placeholder={placeholder} size={'lg'} w={'100%'} borderLeftRadius={'lg'} bgColor={'gray.100'} shadow={3}/>
        </FormControl>
    )
}