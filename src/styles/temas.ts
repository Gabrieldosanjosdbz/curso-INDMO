import { extendTheme } from "native-base"

// aqui estou criando um StyleSheet só que do nativeBase 

export const temas = extendTheme({
    color: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: "#0B3B60"
        },
        white: '#fff',
        black: '#000'
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        xl: 24
    },

    box: {
        display: "flex",
        justifyContent: "center",
        alignitems: "center"
    }
})