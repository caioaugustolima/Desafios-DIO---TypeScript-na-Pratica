
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Exemplo 1

let employee: {
    code: 10,
    name: 'Jhon'
};


// Exemplo 2

let employee2: {code: number, name: string} = {
    
    code: 10,
    name: 'Jhon'
}

// Exemplo 3

interface employee{
    code: number,
    name: String

}

let employee3: employee = {
    code: 10,
    name: 'Jhon'
}
