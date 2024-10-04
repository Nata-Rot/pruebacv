// Triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Círculo
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Ejemplos de uso
console.log("Área del triángulo:", calcularAreaTriangulo(5, 3));
console.log("Área del círculo:", calcularAreaCirculo(4));