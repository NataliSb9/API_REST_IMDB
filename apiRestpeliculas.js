const { json } = require('body-parser');
const express = require('express');
const { title } = require('process');
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
let director = new myProfessional.Professional(
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
let movie1 = new Movie("Vengadores",2018,actores,"EEUU",director,guionista,"ingles",true, "Tony Stark","Disney", "accion")

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


app.post("/pelicula", function(request, response){
    if(movie === null) {
        let movie = new Movie(
            request.body.title,
            request.body.releaseYear,
            request.body.nationality,
            request.body.language,
            request.body.isMC,
            request.body.mainCharacterName,
            request.body.distributor,
            request.body.genre,
        );
        respuesta = {
          mensaje: "Pelicula creada",
          resultado: movie,
        }
    } 
    else{
        respuesta = {
            mensaje: "Esta peli ya existe",
            resultado: null
        }
    }
    response.send(respuesta);
});

app.post("/pelicula/actor", function(request, response){
  let respuesta;
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
  movie1.actors.push(actor);
  respuesta = {
    mensaje: "Actor creado",
    resultado: actor,
  };
  response.send(respuesta);
});

app.post("/pelicula/director", function(request, response){
    let respuesta;
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
    movie1.writer;
    respuesta = {
      mensaje: "Director creado",
      resultado: director,
    };
    response.send(respuesta);
  });

  app.post("/pelicula/guionista", function(request, response){
    let respuesta;
    let guionista = new myProfessional.Professional(
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
    movie1.guionista;
    respuesta = {
      mensaje: "Guionista creado",
      resultado: guionista,
    };
    response.send(respuesta);
  });

app.put("/pelicula", function(request,response){

    if(movie = !null){
        if(request.body.title != null){
            movie.title = request.body.title,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.releaseYear != null){
            movie.releaseYear = request.body.releaseYear,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.nationality != null){
            movie.nationality = request.body.nationality,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.language != null){

            movie.language = request.body.language,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.isMCU != null){
            movie.isMCU = request.body.isMCU,
            respuesta = { 
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.mainCharacterName != null){
            movie.mainCharacterName = request.body.mainCharacterName,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.distributor != null){
            movie.distributor = request.body.distributor,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.genre != null){
            movie.genre = request.body.genre,
            respuesta = {
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }
    }
    else{
        respuesta = {
            error: true,
            codigo:200,
            mensaje: "La pelicula ya existe",
            resultado: movie
        }
    }
    response.send(respuesta)
});

app.put("/pelicula/actor",function(request,response){
  let id = request.query.id;
  let respuesta;
  if (id != undefined) {
      movie1.actors[id].setName(request.body.name);
      movie1.actors[id].setAge(request.body.age);
      movie1.actors[id].setGenre(request.body.genre);
      movie1.actors[id].setWeight(request.body.weight);
      movie1.actors[id].setHeight(request.body.height);
      movie1.actors[id].setHairColor(request.body.hairColor);
      movie1.actors[id].setEyeColor(request.body.eyesColor);
      movie1.actors[id].setRace(request.body.race);
      movie1.actors[id].setIsRetired(request.body.isRetired);
      movie1.actors[id].setNationality(request.body.nationality);
      movie1.actors[id].setOscarsNumber(request.body.oscarsNumber);
      movie1.actors[id].setProfession(request.body.profession);
      respuesta = {
        mensaje: "El actor ha sido actualizado",
        resultado: movie1.actors[id]
      }
   }
 response.send(respuesta);
});

app.put("/pelicula/director",function(request,response){
    let respuesta;
    if (director!= undefined) {
        movie1.writer.setName(request.body.name);
        movie1.writer.setAge(request.body.age);
        movie1.writer.setGenre(request.body.genre);
        movie1.writer.setWeight(request.body.weight);
        movie1.writer.setHeight(request.body.height);
        movie1.writer.setHairColor(request.body.hairColor);
        movie1.writer.setEyeColor(request.body.eyesColor);
        movie1.writer.setRace(request.body.race);
        movie1.writer.setIsRetired(request.body.isRetired);
        movie1.writer.setNationality(request.body.nationality);
        movie1.writer.setOscarsNumber(request.body.oscarsNumber);
        movie1.writer.setProfession(request.body.profession);
        respuesta = {
          mensaje: "El director ha sido actualizado",
          resultado: movie1.writer
        }
     }
   response.send(respuesta);
})

app.put("/pelicula/guionista",function(request,response){
    let respuesta;
    if (id != undefined) {
        movie1.writer.setName(request.body.name);
        movie1.writer.setAge(request.body.age);
        movie1.writer.setGenre(request.body.genre);
        movie1.writer.setWeight(request.body.weight);
        movie1.writer.setHeight(request.body.height);
        movie1.writer.setHairColor(request.body.hairColor);
        movie1.writer.setEyeColor(request.body.eyesColor);
        movie1.writer.setRace(request.body.race);
        movie1.writer.setIsRetired(request.body.isRetired);
        movie1.writer.setNationality(request.body.nationality);
        movie1.writer.setOscarsNumber(request.body.oscarsNumber);
        movie1.writer.setProfession(request.body.profession);
        respuesta = {
          mensaje: "El writer ha sido actualizado",
          resultado: movie1.writer
        }
     }
   response.send(respuesta);
})


app.delete("/pelicula",
function(response, request){
    if( movie != null){
        movie = null;
        respuesta = {
            mensaje: "La pelicula ha sido borrada",
            resultado: movie
        }
    }
    else {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "La pelicula no existe",
            ressultado: movie,
        }
    }
    response.send(respuesta);
});
app.delete("/pelicula/actor",function(request, response){
  let id = request.query.id;
  let respuesta;
  if(id != undefined){
    movie1.actors.splice(id,1);
    respuesta = { 
      mensaje: "Actor borrado",
      resultado: movie1.getActors(),
  }
}
 response.send(respuesta)
})

app.delete("/pelicula/director",function(request, response){
    let respuesta;
    if(id != undefined){
      movie1.writer = null;
      respuesta = { 
        mensaje: "Director borrado",
        resultado: movie1,
    }
  }
   response.send(respuesta)
})
app.delete("/pelicula/guionista",function(request, response){
    let respuesta;
    if(id != undefined){
      movie1.writer = null;
      respuesta = { 
        mensaje: "guionista borrado",
        resultado: movie1,
    }
  }
   response.send(respuesta)
})
app.listen(3000);
