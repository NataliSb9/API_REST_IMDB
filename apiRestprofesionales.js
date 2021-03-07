const { json } = require("body-parser");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

class Professional {
  constructor(
    name,
    age,
    genre,
    weight,
    height,
    hairColor,
    eyeColor,
    race,
    isRetired,
    nationality,
    oscarsNumber,
    profession
  ) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.weight = weight;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.race = race;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
  }
mostrarDatos() {
  return `"\n" Name: "${this.name} "\n" Genre ${this.genre} "\n" Weight: ${this.weight} "\n" Height: ${this.height} "\n" Hair color: ${this.hairColor} "\n" Eye color: ${this.eyeColor} "\n" Race: ${this.race} "\n" Is retired? : ${this.isRetired} "\n" Nationality: ${this.nationality} "\n" Oscar numbers: ${this.oscarsNumber} "\n" Profession: ${this.profession} "\n";`;
}
getName() {
  return this.name;
}

 setName(name) {
    this.name = name;
}

 getAge(){
    return this.age;
}

 setAge(age){
    this.age = age;
}

 getGenre(){
    return this.genre;
}

 setGenre(genre){
    this.genre = genre;
}

 getWeight(){
    return this.weight;
}

 setWeight(weight){
    this.weight = weight;
}

 getHeight(){
    return this.height;
}

 setHeight(height){
    this.height = height;
}

 getHairColor(){
    return this.hairColor;
}

 setHairColor(hairColor){
    this.hairColor = hairColor;
}

 getEyeColor(){
    return this.eyeColor;
}

 setEyeColor(eyeColor) {
    this.eyeColor = eyeColor;
}

 getRace(){
    return this.race;
}

 setRace(race){
    this.race = race;
}

 getIsRetired(){
    return this.isRetired;
}

 setIsRetired(isRetired){
    this.isRetired = isRetired;
}

 getNationality(){
    return this.nationality;
}

 setNationality(nationality) {
    this.nationality = nationality;
}

 getOscarsNumber(){
    return this.oscarsNumber;
}

 setOscarsNumber(oscarsNumber){
    this.oscarsNumber = oscarsNumber;
}

 getProfession(){
    return this.profession;
}

 setProfession(profession){
    this.profession = profession;
}
}
let profesional1 = new Professional(
  "Robert Downey Jr",
  55,
  "hombre",
  70,
  1.74,
  "Moreno",
  "marron",
  "Blanco",
  false,
  "estadounidense",
  2,
  "actor"
);
let profesional2 = new Professional(
  "Belen Cuesta",
  37,
  "mujer",
  52,
  1.7,
  "morena",
  "marron",
  "caucasica",
  false,
  "espanyola",
  0,
  "actriz"
);
let profesional3 = new Professional(
  "Steven Spielberg",
  74,
  "hombre",
  70,
  1.75,
  "canoso",
  "azules",
  "caucasica",
  false,
  "estadounidense",
  2,
  "director"
);
let profesional4 = new Professional(
  "Jordan Peele",
  42,
  "hombre",
  76,
  1.75,
  "ocuro",
  "azules",
  "negro",
  false,
  "estadounidense",
  0,
  "guionista"
);

let profesionales = [profesional1, profesional2, profesional3, profesional4];

app.get("/profesionales", function (request, response) {
  let respuesta;
  let profesional;
  let id = request.query.id;
  if (id !== undefined) {
    profesional = profesionales[id];
    respuesta = {
      resultado: profesional,
    };
  } else {
    respuesta = { resultado: profesionales };
  }
  response.send(respuesta);
});

app.post("/profesionales", function (request, response) {
  let respuesta;
  let profesional = new Professional(
    request.body.name,
    request.body.age,
    request.body.genre,
    request.body.weight,
    request.body.height,
    request.body.hairColor,
    request.body.eyesColor,
    request.body.race,
    request.body.isRetired,
    request.body.nationality,
    request.body.oscarsNumber,
    request.body.profession
  );
  console.log(profesional);
  profesionales.push(profesional);
  respuesta = {
    mensaje: "Profesional creado",
    resultado: profesional,
  };
  response.send(respuesta);
});

app.put("/profesionales", function (request, response) {
  let id = request.query.id;
  let respuesta;
  if (id != undefined) {
      profesionales[id].setName(request.body.name);
      profesionales[id].setAge(request.body.age);
      profesionales[id].setGenre(request.body.genre);
      profesionales[id].setWeight(request.body.weight);
      profesionales[id].setHeight(request.body.height);
      profesionales[id].setHairColor(request.body.hairColor);
      profesionales[id].setEyeColor(request.body.eyesColor);
      profesionales[id].setRace(request.body.race);
      profesionales[id].setIsRetired(request.body.isRetired);
      profesionales[id].setNationality(request.body.nationality);
      profesionales[id].setOscarsNumber(request.body.oscarsNumber);
      profesionales[id].setProfession(request.body.profession);
      respuesta = {
        mensaje: "El profesional ha sido actualizado",
        resultado: profesionales[id]
      }
   }
 response.send(respuesta);
});
app.delete("/profesionales", function (request, response) {
  let id = request.query.id;
  let profesional;
  let respuesta;
  if(id != undefined){
    profesionales[id] = null;
    respuesta = { 
      mensaje: "Profesional borrado",
      resultado: profesionales,

  }
}
 response.send(respuesta)
});
app.listen();

module.exports = {Professional};