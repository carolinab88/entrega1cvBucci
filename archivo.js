
const boton1= document.getElementById(`#boton1`)
const boton2= document.getElementById(`#boton2`)
const boton3= document.getElementById(`#boton3`)
const boton4= document.getElementById(`#boton4`)
const boton5= document.getElementById(`#boton5`)

 fetch('https://randomuser.me/api/?exc=cell,id,login,registered&nat=es')
.then(response => response.json())
.then(function(data) {
    console.log(data.results) 
    const datos = data.results[0] 
    function foto(){
       let img =document.getElementsByTagName("img")[0];
       img.src=`${datos.picture.large}`;   
    }

    function nombre() {
        let nombre = `${datos.name.first} ${datos.name.last}`;
        document.getElementById("nombre").innerHTML="Nombre: " +nombre
    }

    function email(){
        let email = `${datos.email}`;
        document.getElementById("email").innerHTML="Email: " +email
    }
 
    function direccion(){
        let direccion = `${datos.location.street.name} ${datos.location.street.number} ${datos.location.city} ${datos.location.country}`;
        document.getElementById("direccion").innerHTML="Direccion: "+ direccion
    }

    function telefono(){
        let telefono= `${datos.phone}`;
        document.getElementById("telefono").innerHTML="Telefono: "  +telefono
    }
    
    function fechaDeNacimiento(){
        let fechaDeNacimiento = `${datos.dob.age}`;
        document.getElementById("edad").innerHTML= "Edad: "+fechaDeNacimiento
    }
    
    foto()
    boton1.addEventListener(`click`,nombre);
    boton2.addEventListener(`click`,email);
    boton3.addEventListener(`click`,direccion);
    boton4.addEventListener(`click`,telefono);
    boton5.addEventListener(`click`,fechaDeNacimiento);
    

})




