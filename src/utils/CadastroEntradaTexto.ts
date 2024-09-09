const secoes = [
    {
        id: 1,
        titulo: "Insira alguns dados básicos",
        entradaTexto: [
        {
            id: 1,
            label: 'Nome',
            placeholder: 'Digite seu nome completo'
        },
        {
            id: 2,
            label: "Email",
            placeholder: 'Insira seu endereço de email'
        },
        {
            id: 3,
            label: 'Crie uma senha',
            placeholder: 'Insira sua senha'
        },
        {
            id: 4,
            label: 'Repita a senha',
            placeholder: 'Insira sua senha'
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
        {
            id: 2,
            label: 'Endereço',
            placeholder: 'Insira seu endereço'
        },
        {
            id: 3,
            label: 'Número',
            placeholder: 'Insira  seu número'
        },
        {
            id: 4,
            label: 'Complemento',
            placeholder: 'Insira seu complemento'
        },
        {
            id: 5,
            label: 'Telefone',
            placeholder: '(00) 00000-0000'
        }
        ],
        checkbox: []
    },

    {
        id: 3,
        titulo: 'Para finalizar, qual seu plano de saúde?',
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
            valor: 'Bradesco'
        },
        {
            id: 4,
            valor: 'Amil'
        },
        {
            id: 5,
            valor: 'Biosaúde'
        },
        {
            id: 6,
            valor: 'Biovida'
        },
        {
            id: 7,
            valor: 'Outros'
        },
        {
            id: 8,
            valor: 'Não tenho plano'
        },
        ],
    }
];

export {secoes}