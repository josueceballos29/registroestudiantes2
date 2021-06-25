const nickName = document.querySelector('.nickName');
const nickSubmit = document.querySelector('.nickSubmit');

const nota1 = document.querySelector('.nota1');
const nota2 = document.querySelector('.nota2');
const nota3 = document.querySelector('.nota3');
const nota4 = document.querySelector('.nota4');

const bodynames = document.querySelector('.body');
const calculateProm = document.querySelector('.calculateProm');
let codehtml = '';
let codePromedio = '';

nickSubmit.addEventListener('click',()=>{
	let cprs = [nota1.value,nota2.value,nota3.value,nota4.value];

	if (nickName.value == '' || parseFloat(nickName.value)) {
		alert('Registro incorrecto');
		nickName.value = '';
	} 
	else if (nota1.value == '' || nota2.value == '' || nota3.value == '' || nota4.value == '') {
		alert('Faltan datos');
	}
	else if (isNaN(cprs[0]) ||isNaN(cprs[1]) || isNaN(cprs[2]) || isNaN(cprs[3])){
		alert('Ahh, sos hacker');
	}
	else {
		codehtml+= `<div class="nts">
						<div class="names">${nickName.value}</div>
						<div class="nt">${cprs[0]}</div>
						<div class="nt">${cprs[1]}</div>
						<div class="nt">${cprs[2]}</div>
						<div class="nt">${cprs[3]}</div>
					</div>`;
		bodynames.innerHTML = codehtml;

		codePromedio+= `
					<div class='container-block'>
						<div class="body-alumno">
							<p class="nameAlum">${nickName.value}</p>
						</div>
						<div class="body-promedio">
							<p class="promedioAlum">${calcularPromedio(cprs)}</p>
						</div>
					</div>
					`
	cardBody.innerHTML = codePromedio;
	nickName.value = '';
	nota1.value = ''; nota2.value = ''; nota3.value = ''; nota4.value = '';
	}
})

const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');

// Mostrando todos los promedios de los alumnos
calculateProm.addEventListener('click',(e)=>{
	if (cardBody.innerHTML == '') {
		alert('Ningun estudiante ha sido registrado')
	}
	else {
		card.removeAttribute('hidden');
		calculateProm.setAttribute('hidden','true');
	}
});
// Calculando el promedio de cada estudiante
function calcularPromedio(notas) {
	let nt1 = parseFloat(notas[0]);
	let nt2 = parseFloat(notas[1]);
	let nt3 = parseFloat(notas[2]);
	let nt4 = parseFloat(notas[3]);

	return  (nt1 + nt2 + nt3 + nt4) / 4;
}