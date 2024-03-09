codes = [
  ['a', 'xx'],
  ['e', 'ww'],
  ['i', 'zz'],
  ['o', 'yy'],
  ['u', 'gg'],
  ['m', '6'],
]

function encriptador(texto) {
  
  codes.forEach(item => {
    if (texto.includes(item[0])) {
      texto = texto.replace(item[0], item[1])
    }
  });

  return texto
}

function desencriptador(texto) {
  
  codes.forEach(item => {
    if (texto.includes(item[1])) {
      texto = texto.replaceAll(item[1], item[0])
    }
  });

  return texto
}

const input = document.getElementById('input')
const btnEncriptar = document.getElementById('btn-encriptar')
const btnDesencriptar = document.getElementById('btn-desencriptar')
const display = document.getElementById('display')

btnEncriptar.addEventListener('click', () => {
  const texto = input.value 
  const textoEncriptado = encriptador(texto)
  display.innerText = `El texto ${texto} encriptado es: '${textoEncriptado}'`
})

btnDesencriptar.addEventListener('click', () => {
  const texto = input.value 
  const textoDesencriptado = desencriptador(texto)
  display.innerText = `El texto ${texto} desencriptado es: '${textoDesencriptado}'`
})