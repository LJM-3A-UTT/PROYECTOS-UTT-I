const { sumar } = require("../");
// describe, test, it, expect, toBex

// Debe de esperar 1 minuto por cada test
jest.setTimeout(60000);

describe(
"Verificar que la función suma funcione correctamente",
() => {

const a = 5;
const b = 3;
const sum = sumar;
const expected = 8;

const result = sum(a, b);

test(
"5 + 3 debe ser 8",
() => {
expect(result).toBe(expected);
}
)

test(
"Verficar que el resultado sea diferente de 0",
() => {
expect(result).not.toBe(0);
}
)

}
)