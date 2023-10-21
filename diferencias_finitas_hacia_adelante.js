// Se define la función para la que queremos aproximar la derivada
function funcion(x) {
// Aquí defines tu función, por ejemplo, f(x) = x^2
    return x * x;
}
// La función para aproximar la derivada hacia adelante es:
function derivadaHaciaAdelante(x, h) {
// Aplicamos la fórmula de diferencias finitas hacia adelante
    return (funcion(x + h) - funcion(x)) / h;
}
// este es el punto en el que queremos aproximar la derivada
var punto = 2;
// EL tamaño del incremento h (se ajusta según sea necesario)
var h = 0.0001;
// Se calcula y muestra la derivada aproximada en el punto dado
var derivadaAproximada = derivadaHaciaAdelante(punto, h);
console.log("La derivada aproximada en x = " + punto + " es: " + derivadaAproximada);
