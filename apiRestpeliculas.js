const { json } = require('body-parser');
const express = require('express');
const { title } = require('process');
const { writer } = require('repl');
const app = express();
let myProfessional = require("./apiRestprofesionales")
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

class Movie {
    constructor(title, releaseYear,actors, nationality,director,writer, language , isMcu, mainCharacterName , platform, distributor,genre) {
        this.title = title
        this.releaseYear = releaseYear
        this.actors = actors
        this.nationality = nationality
        this.director = director
        this.writer = writer
        this.language = language
        this.platform = platform
        this.isMCU = isMcu
        this.mainCharacterName = mainCharacterName
        this.distributor = distributor
        this.genre = genre

    }
    mostrarDatosPeliculas() {
        console.log("*******************************")
        console.log("Peliculas: ")
        console.log("Tittle: " + this.title)
        console.log("Release year: " + this.releaseYear)
        console.log("Actors: ")
        for (let i = 0; i < this.getActors().length; i++) {

            this.getActors()[i].mostrarDatos()

        }
        console.log("Nacionality: " + this.nationality)
        console.log("Director: ")
        this.writer.mostrarDatos()
        console.log("Writer: ")
        this.writer.mostrarDatos()
        console.log("Language: " + this.languaje)
        console.log("Plataform: " + this.plataform)
        console.log("Is MCU?: " + this.isMCU)
        console.log("Main character name: " + this.mainCharacterName)
        console.log("Producer: ")
        this.producer.mostrarDatos()
        console.log("Distributor: ")
        this.distributor.mostrarDatos()
        console.log("Genre: " + this.genre)
        console.log("*******************************")
    }
    getActors(){
        return this.actors;
    }
    getDirector(){
        return this.writer;
    }
    getWriter(){
        return this.writer;
    }
}
//let movie3 = new Movie("La trinchera infinita", 2019, "España",false, "Higinio","Netflix", "drama")
//let movie4 = new Movie("Guns Akimbo", 2019, "Nueva Zelanda","ingles", false, "Miles", "Amazon", "accion")

let actor1 = new myProfessional.Professional(
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

let actor2 = new myProfessional.Professional(
    "Scarlett Johansson",
    36,
    "mujer",
    70,
    1.60,
    "rubio",
    "azules",
    "Blanca",
    false,
    "estadounidense",
    1,
    "actor"
);
let writer1 = new myProfessional.Professional(
    "Joe Russo",
    49,
    "hombre",
    70,
    1.74,
    "Moreno",
    "marron",
    "Blanco",
    false,
    "estadounidense",
    0,
    "director"
)

let guionista = new myProfessional.Professional(
    "Christopher Markus",
    51,
    "hombre",
    74,
    1.74,
    "negro",
    "marron",
    "Blanco",
    false,
    "estadounidense",
    0,
    "guionista"
)
let actores = [actor1, actor2];
let movie1 = new Movie("Vengadores",2018,actores,"EEUU",writer1,guionista,"ingles",true, "Tony Stark","Disney", "accion")

let directorTrinchera = new myProfessional.Professional(
    "Jon Garanyo",
    46,
    "hombre",
    70,
    1.74,
    "Moreno",
    "marron",
    "Blanco",
    false,
    "espanyol",
    0,
    "director"
)
let guionistaTrinchera = new myProfessional.Professional(
    "Luis Berdejo",
    46,
    "hombre",
    72,
    1.79,
    "grisaceo",
    "marron",
    "Blanco",
    false,
    "espanyol",
    0,
    "guionista"
);
let actorTrinchera1 = new myProfessional.Professional(
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
let actorTrinchera2 = new myProfessional.Professional(
    "Antonio de la Torre",
    53,
    "hombre",
    79,
    1.74,
    "moreno",
    "marron",
    "caucasica",
    false,
    "espanyol",
    0,
    "actor"
);

function readData(){
  let ficheroJson=fs.readFileSync("profesionales.json")
  let profesionalesData = JSON.parse(ficheroJson)

  return profesionalesData;
}

function writeData(input){
  let string =JSON.stringify(input)
  fs.writeFileSync("profesionales.json",string)
  
}
let actoresTrinchera = [actorTrinchera1, actorTrinchera2]
let movie2 = new Movie("La trinchera infinita", 2019, actoresTrinchera,"España",directorTrinchera,guionistaTrinchera,"espanyol",false, "Higinio","Netflix", "drama")
let movies = [movie1,movie2]

let peliculasFormato= JSON.stringify(movies)
fs.writeFileSync("peliculas.json", peliculasFormato)

app.get("/peliculas", function(request,response){
    let peliculas = readData();
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        peliculas = peliculas[id]
        respuesta = {
          resultado: peliculas[id],
        };
    }else{
        respuesta ={
            resultado: peliculas
        }
    }
    response.send(respuesta)
});

app.get("/peliculas/actor", function(request,response){
    let respuesta;
    let peliculas = readData();
    let id = request.query.id;
    if (id !== undefined) {
        let actores = peliculas[id].actors
        respuesta = {
          resultado: actores,
        };
    }
    response.send(respuesta)
});

app.get("/peliculas/director", function(request,response){
    let peliculas = readData();
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        let director = peliculas[id].director
        respuesta = {
          resultado: director,
        };
    }
    response.send(respuesta)
});

app.get("/peliculas/guionista", function(request,response){
    let peliculas = readData();
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        let guionista = peliculas[id].writer
        respuesta = {
          resultado: guionista,
        };
    }
    response.send(respuesta)
});


app.post("/peliculas", function(request, response){
    let peliculas = readData();
    let movie = new Movie(
        request.body.title,
        request.body.releaseYear,
        request.body.actors,
        request.body.nationality,
        request.bodydirectorr,
        request.body.writer,
        request.body.language,
        request.body.isMC,
        request.body.mainCharacterName,
        request.body.distributor,
        request.body.genre,
    );
    peliculas.push(movie)
    writeData(peliculas)
    respuesta = {
        mensaje: "Pelicula creada",
        resultado: movie,
    }
    response.send(respuesta);

});

app.post("/peliculas/actor", function(request, response){
  let respuesta;
  let peliculas = readData();
  let id = request.query.id;
  if (id !== undefined){
    let actor = new myProfessional.Professional(
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
    peliculas[id].actors.push(actor);
    writeData(peliculas);
    respuesta = {
    mensaje: "Actor creado",
    resultado: actor,
  }
  };
  response.send(respuesta);
});

app.post("/peliculas/director", function(request, response){
    let respuesta;
    let peliculas = readData();
    let id = request.query.id;
    if (id !== undefined){
      let director = new myProfessional.Professional(
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
    peliculas[id].director;
    writeData(peliculas)
    respuesta = {
    mensaje: "Director creado",
    resultado: director,
    };
  }
    response.send(respuesta);
  });

  app.post("/peliculas/guionista", function(request, response){
    let respuesta;
    let peliculas = readData();
    let id = request.query.id;
    if (id !== undefined){
      let writer = new myProfessional.Professional(
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
    peliculas[id].writer;
    writeData(peliculas)
    respuesta = {
    mensaje: "Guionista creado",
    resultado: writer,
    };
  }
    response.send(respuesta);
  });


app.put("/peliculas/actor",function(request,response){
  let id = request.query.id;
  let idA = request.query.idA;
  let peliculas = readData();
  let respuesta;
  if (id != undefined && idA != undefined) {
      peliculas[id].actors[idA].name= request.body.name;
      pelicula[id].actors[idA].age= request.body.age;
      pelicula[id].actors[idA].genre=request.body.genre;
      pelicula[id].actors[idA].weight= request.body.weight;
      pelicula[id].actors[idA].height=request.body.height;
      pelicula[id].actors[idA].hairColor=request.body.hairColor;
      peliculas[id].actors[idA].eyeColor=request.body.eyesColor;
      peliculas[id].actors[idA].race= request.body.race;
      peliculas[id].actors[idA].retired=request.body.isRetired;
      peliculas[id].actors[idA].nationality=request.body.nationality;
      peliculas[id].actors[idA].oscarsNumber=request.body.oscarsNumber;
      peliculas[id].actors[idA].profession=request.body.profession;
      writeData(peliculas)
      respuesta = {
        mensaje: "El actor ha sido actualizado",
        resultado: peliculas[id].actors[id]
      }
   }
 response.send(respuesta);
});

app.put("/peliculas/director",function(request,response){
    let id = request.query.id;
    let peliculas= readData()
    let respuesta;
    if (id != undefined) {
      let director = peliculas[id].director
        director.name=request.body.name;
        director.age=request.body.age;
        director.genre=request.body.genre;
        director.weight= request.body.weight;
        director.height=request.body.height;
        director.hairColor=request.body.hairColor;
        director.eyeColor=request.body.eyesColor;
        director.race=request.body.race;
        director.isRetired=request.body.isRetired;
        director.nationality=request.body.nationality;
        director.oscarsNumber=request.body.oscarsNumber;
        director.profession=request.body.profession;
        writeData(peliculas)
        respuesta = {
          mensaje: "El director ha sido actualizado",
          resultado: director
        }
     }
   response.send(respuesta);
})

app.put("/peliculas/guionista",function(request,response){
    let respuesta;
    let peliculas= readData()
    if (id != undefined) {
      let writer = peliculas[id].writer
        writer.name=request.body.name;
        writer.age=request.body.age;
        writer.genre=request.body.genre;
        writer.weight= request.body.weight;
        writer.height=request.body.height;
        writer.hairColor=request.body.hairColor;
        writer.eyeColor=request.body.eyesColor;
        writer.race=request.body.race;
        writer.isRetired=request.body.isRetired;
        writer.nationality=request.body.nationality;
        writer.oscarsNumber=request.body.oscarsNumber;
        writer.profession=request.body.profession;
        writeData(peliculas)
        respuesta = {
          mensaje: "El guionista ha sido actualizado",
          resultado: writer
        }
     }
   response.send(respuesta);
})

app.delete("/peliculas",function(request,response){
  let peliculas= readData()
  let id = request.query.id;
  if( id!= undefined){
      peliculas.splice(id,1);
      writeData(peliculas)
      respuesta = {
        mensaje: "La pelicula ha sido borrada",
        resultado: peliculas
      } 
    }
  response.send(respuesta);
});
app.delete("/peliculas/actor",function(request, response){
  let peliculas= readData()
  let id = request.query.id;
  let idA = request.query.idA;
  let respuesta;
  if(id != undefined){
    peliculas[id].actors.splice(idA,1);
    writeData(peliculas)
    respuesta = { 
      mensaje: "Actor borrado",
      resultado: peliculas[id]
    }
  }
 response.send(respuesta)
})

app.delete("/peliculas/director",function(request, response){
    let respuesta;
    let peliculas= readData()
    let id = request.query.id;
    if(id != undefined){
      peliculas[id].writer = null;
      writeData(peliculas)
      respuesta = { 
        mensaje: "Director borrado",
        resultado: peliculas,
      }
  }
   response.send(respuesta)
})
app.delete("/peliculas/guionista",function(request, response){
    let respuesta;
    let peliculas= readData()
    let id = request.query.id;

    if(id != undefined){
      peliculas.writer = null;
      writeData(peliculas)
      respuesta = { 
        mensaje: "guionista borrado",
        resultado: peliculas,
    }
  }
   response.send(respuesta)
})
app.listen();
