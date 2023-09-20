let continuar = true;

const precioEuro = 500;
const precioDolar = 730;

while (continuar) {
	let divisa = Number(prompt("Ingresa el tipo de divisa\n 1.Euro\n 2.Dolar"));
	if (divisa === 1) {
		let cantidadEuros = Number(prompt("Cantidad de euros a comprar"));
		let cantidadPesos = convertirDivisa(cantidadEuros, precioEuro);
		alert(
			"Comprar " +
				cantidadEuros +
				" euros te costara " +
				cantidadPesos +
				" pesos "
		);
	} else if (divisa === 2) {
		let cantidadDolares = Number(prompt("Cantidad de dolares a comprar"));
		let cantidadPesos = convertirDivisa(cantidadDolares, precioDolar);
		alert(
			"Comprar " +
				cantidadDolares +
				" dolares te costara " +
				cantidadPesos +
				" pesos "
		);
	}

	let preguntaContinuar = Number(
		prompt("¿Quiere continuar convirtiendo?\n 1.Si\n 2.No")
	);

	if (preguntaContinuar === 1) {
		continuar = true;
	} else if (preguntaContinuar === 2) {
		continuar = false;
	}
}

function convertirDivisa(cantidadDivisa, valorDivisa) {
	return cantidadDivisa * valorDivisa;
}
