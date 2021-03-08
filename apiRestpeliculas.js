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
let actoresTrinchera = [actorTrinchera1, actorTrinchera2]
let movie2 = new Movie("La trinchera infinita", 2019, actoresTrinchera,"España",directorTrinchera,guionistaTrinchera,"espanyol",false, "Higinio","Netflix", "drama")
let movies = [movie1,movie2]

app.get("/peliculas", function(request,response){
    let respuesta;
    let movie;
    let id = request.query.id;
    if (id !== undefined) {
        movie = movies[id]
        respuesta = {
          resultado: movies[id],
        };
    }else{
        respuesta ={
            resultado: movies
        }
    }
    response.send(respuesta)
});

app.get("/peliculas/actor", function(request,response){
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        let actores = movies[id].actors
        respuesta = {
          resultado: actores,
        };
    }
    response.send(respuesta)
});

app.get("/peliculas/director", function(request,response){
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        let director = movies[id].director
        respuesta = {
          resultado: director,
        };
    }
    response.send(respuesta)
});

app.get("/peliculas/guionista", function(request,response){
    let respuesta;
    let id = request.query.id;
    if (id !== undefined) {
        let guionista = movies[id].writer
        respuesta = {
          resultado: guionista,
        };
    }
    response.send(respuesta)
});


app.post("/peliculas", function(request, response){
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
    movies.push(movie)
    respuesta = {
        mensaje: "Pelicula creada",
        resultado: movie,
    }
    response.send(respuesta);

});

app.post("/peliculas/actor", function(request, response){
  let respuesta;
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
    movies[id].actors.push(actor);
    respuesta = {
    mensaje: "Actor creado",
    resultado: actor,
  }
  };
  response.send(respuesta);
});

app.post("/peliculas/director", function(request, response){
    let respuesta;
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
    movies[id].director;
    respuesta = {
    mensaje: "Director creado",
    resultado: director,
    };
  }
    response.send(respuesta);
  });

  app.post("/peliculas/guionista", function(request, response){
    let respuesta;
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
    movies[id].writer;
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

  let respuesta;
  if (id != undefined && idA != undefined) {
      movies[id].actors[idA].setName(request.body.name);
      movies[id].actors[idA].setAge(request.body.age);
      movies[id].actors[idA].setGenre(request.body.genre);
      movies[id].actors[idA].setWeight(request.body.weight);
      movies[id].actors[idA].setHeight(request.body.height);
      movies[id].actors[idA].setHairColor(request.body.hairColor);
      movies[id].actors[idA].setEyeColor(request.body.eyesColor);
      movies[id].actors[idA].setRace(request.body.race);
      movies[id].actors[idA].setIsRetired(request.body.isRetired);
      movies[id].actors[idA].setNationality(request.body.nationality);
      movies[id].actors[idA].setOscarsNumber(request.body.oscarsNumber);
      movies[id].actors[idA].setProfession(request.body.profession);
      respuesta = {
        mensaje: "El actor ha sido actualizado",
        resultado: movies[id].actors[id]
      }
   }
 response.send(respuesta);
});

app.put("/peliculas/director",function(request,response){
    let id = request.query.id;
    let respuesta;
    if (id != undefined) {
      let director = movies[id].director
        director.setName(request.body.name);
        director.setAge(request.body.age);
        director.setGenre(request.body.genre);
        director.setWeight(request.body.weight);
        director.setHeight(request.body.height);
        director.setHairColor(request.body.hairColor);
        director.setEyeColor(request.body.eyesColor);
        director.setRace(request.body.race);
        director.setIsRetired(request.body.isRetired);
        director.setNationality(request.body.nationality);
        director.setOscarsNumber(request.body.oscarsNumber);
        director.setProfession(request.body.profession);
        respuesta = {
          mensaje: "El director ha sido actualizado",
          resultado: director
        }
     }
   response.send(respuesta);
})

app.put("/peliculas/guionista",function(request,response){
    let respuesta;
    if (id != undefined) {
      let writer = movies[id].writer
        writer.setName(request.body.name);
        writer.setAge(request.body.age);
        writer.setGenre(request.body.genre);
        writer.setWeight(request.body.weight);
        writer.setHeight(request.body.height);
        writer.setHairColor(request.body.hairColor);
        writer.setEyeColor(request.body.eyesColor);
        writer.setRace(request.body.race);
        writer.setIsRetired(request.body.isRetired);
        writer.setNationality(request.body.nationality);
        writer.setOscarsNumber(request.body.oscarsNumber);
        writerr.setProfession(request.body.profession);
        respuesta = {
          mensaje: "El guionista ha sido actualizado",
          resultado: writer
        }
     }
   response.send(respuesta);
})

app.delete("/peliculas",function(request,response){
  let id = request.query.id;
    if( id!= undefined){
        movies[id] = null;
        respuesta = {
            mensaje: "La pelicula ha sido borrada",
            resultado: movies
        }
    }
    response.send(respuesta);
});
app.delete("/peliculas/actor",function(request, response){
  let id = request.query.id;
  let idA = request.query.idA;
  let respuesta;
  if(id != undefined){
    movies[id].actors.splice(idA,1);
    respuesta = { 
      mensaje: "Actor borrado",
      resultado: movies[id]
    }
  }
 response.send(respuesta)
})

app.delete("/peliculas/director",function(request, response){
    let respuesta;
    let id = request.query.id;
    if(id != undefined){
      movies[id].writer = null;
      respuesta = { 
        mensaje: "Director borrado",
        resultado: movies,
    }
  }
   response.send(respuesta)
})
app.delete("/peliculas/guionista",function(request, response){
    let respuesta;
    let id = request.query.id;

    if(id != undefined){
      movies.writer = null;
      respuesta = { 
        mensaje: "guionista borrado",
        resultado: movies,
    }
  }
   response.send(respuesta)
})
app.listen(3000);
