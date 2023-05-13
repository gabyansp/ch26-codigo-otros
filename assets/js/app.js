
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // nombre completo en variable para un mejor reconocimiento($n) y en la selección del elemento es una la clase('name').
const $blog = document.querySelector('.blog'); // nombre completo en variable para un mejor reconocimiento($b) y en la selección del elemento es una la clase('#blog').
// Se agrego location en html para vincular datos.
const $location = document.querySelector('.location');// nombre completo en variable para un mejor reconocimiento($l) y en la selección del elemento es una la clase('location').
//Se usa un operador await, por lo que falta un async
async function displayUser(username) {
  $name.textContent = 'cargando...';
  // Uso de try-catch en caso de que falle la llamada a la API.
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Convertir en json para obtener los datos de la respuesta de la API.
    const data = await response.json();
    console.log(data);
    $name.textContent = `${data.name}`;// nombre completo en variable para un mejor reconocimiento($n) y cambio de comillas simples por acentos graves (`) para mostrar los valores de los datos en los elementos del DOM.
    $blog.textContent = `${data.blog}`;// nombre completo en variable para un mejor reconocimiento($b) y cambio de comillas simples por acentos graves (`) para mostrar los valores de los datos en los elementos del DOM.
    $location.textContent = `${data.location}`;// nombre completo en variable para un mejor reconocimiento($l) y cambio de comillas simples por acentos graves (`) para mostrar los valores de los datos en los elementos del DOM.
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Cambio de variable n a $n para ligarlo al elemento del DOM.
}

displayUser('stolinski').catch(handleError);
