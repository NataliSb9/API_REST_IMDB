const { json } = require("body-parser");
const express = require("express");
const { title } = require("process");
const app = express();
let myProfessional = require("./apiRestprofesionales");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

class Movie {
  constructor(
    title,
    releaseYear,
    actors,
    nationality,
    director,
    writer,
    language,
    isMcu,
    mainCharacterName,
    platform,
    distributor,
    genre
  ) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.actors = actors;
    this.nationality = nationality;
    this.director = director;
    this.writer = writer;
    this.language = language;
    this.platform = platform;
    this.isMCU = isMcu;
    this.mainCharacterName = mainCharacterName;
    this.distributor = distributor;
    this.genre = genre;
  }
  mostrarDatosPeliculas() {
    console.log("*******************************");
    console.log("Peliculas: ");
    console.log("Tittle: " + this.title);
    console.log("Release year: " + this.releaseYear);
    console.log("Actors: ");
    for (let i = 0; i < this.getActors().length; i++) {
      this.getActors()[i].mostrarDatos();
    }
    console.log("Nacionality: " + this.nationality);
    console.log("Director: ");
    this.writer.mostrarDatos();
    console.log("Writer: ");
    this.writer.mostrarDatos();
    console.log("Language: " + this.languaje);
    console.log("Plataform: " + this.plataform);
    console.log("Is MCU?: " + this.isMCU);
    console.log("Main character name: " + this.mainCharacterName);
    console.log("Producer: ");
    this.producer.mostrarDatos();
    console.log("Distributor: ");
    this.distributor.mostrarDatos();
    console.log("Genre: " + this.genre);
    console.log("*******************************");
  }
  getActors() {
    return this.actors;
  }
  getDirector() {
    return this.writer;
  }
  getWriter() {
    return this.writer;
  }
  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getReleaseYear() {
    return this.releaseYear;
  }

  setReleaseYear(releaseYear) {
    this.releaseYear = releaseYear;
  }
  getActors() {
    return this.actors;
  }

  setActors(actors) {
    this.actors = actors;
  }

  getNationality() {
    return this.nationality;
  }

  setNationality(nationality) {
    this.nationality = nationality;
  }

  getDirector() {
    return this.director;
  }

  setDirector(director) {
    this.director = director;
  }

  getWriter() {
    return this.writer;
  }

  setWriter(writer) {
    this.writer = writer;
  }

  getLanguaje() {
    return this.languaje;
  }

  setLanguaje(languaje) {
    this.languaje = languaje;
  }

  getPlataform() {
    return this.plataform;
  }

  setPlataform(plataform) {
    this.plataform = plataform;
  }
  setDistributor(distributor) {
    this.distributor = distributor;
  }
  getIsMCU() {
    return this.isMCU;
  }

  setIsMCU(isMCU) {
    this.isMCU = isMCU;
  }

  getMainCharacterName() {
    return this.mainCharacterName;
  }

  setMainCharacterName(mainCharacterName) {
    this.mainCharacterName = mainCharacterName;
  }

  getGenre() {
    return this.genre;
  }

  setGenre(genre) {
    this.genre = genre;
  }
}
//let movie3 = new Movie("La trinchera infinita", 2019, "España",false, "Higinio","Netflix","Filmax", "drama")
//let movie4 = new Movie("Guns Akimbo", 2019, "Nueva Zelanda","ingles", false, "Miles", "Amazon","Amazon movies", "accion")

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
  1.6,
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
);

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
);
let actores = [actor1, actor2];
let movie1 = new Movie(
  "Vengadores",
  2018,
  actores,
  "EEUU",
  director,
  guionista,
  "ingles",
  true,
  "Tony Stark",
  "Disney",
  "Disney",
  "accion"
);

app.get("/pelicula", function (request, response) {
  let respuesta;
  if (movie1 != null) {
    respuesta = movie1;
  } else {
    respuesta = {
      mensaje: "No hay pelicula",
    };
  }
  response.send(respuesta);
});
app.get("/pelicula/actor", function (request, response) {
  let respuesta;
  let actor;
  let id = request.query.id;
  if (id !== undefined) {
    actor = movie1.actors[id];
    respuesta = {
      resultado: actor,
    };
  } else {
    respuesta = movie1.getActors();
  }
  response.send(respuesta);
});

app.get("/pelicula/director", function (request, response) {
  let respuesta;
  let director;
  let id = request.query.id;
  if (id !== undefined) {
    director = movie1.writer;
    respuesta = {
      resultado: director,
    };
  } else {
    respuesta = movie1.getDirector();
  }
  response.send(respuesta);
});
app.get("/pelicula/guionista", function (request, response) {
  let respuesta;
  let guionista;
  let id = request.query.id;
  if (id !== undefined) {
    guionista = movie1.writer;
    respuesta = {
      resultado: guionista,
    };
  } else {
    respuesta = movie1.getWriter();
  }
  response.send(respuesta);
});

app.post("/pelicula", function (request, response) {
  let respuesta;
  let movie = new Movie(
    request.body.title,
    request.body.releaseYear,
    request.body.actors,
    request.body.nationality,
    request.body.director,
    request.body.writer,
    request.body.language,
    request.body.isMC,
    request.body.platform,
    request.body.mainCharacterName,
    request.body.distributor,
    request.body.genre
  );
  respuesta = {
    mensaje: "Pelicula creada",
    resultado: movie,
  };

  response.send(respuesta);
});

app.post("/pelicula/actor", function (request, response) {
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

app.post("/pelicula/director", function (request, response) {
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

app.post("/pelicula/guionista", function (request, response) {
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

app.put("/pelicula", function (request, response) {
  let respuesta;
  if (movie1 !== null){
        if(request.body.title != null){movie1.setTitle(request.body.title)
            respuesta={resultado: movie1}
        }
        if(request.body.releaseYear !== null){movie1.setReleaseYear(request.body.releaseYear)
            respuesta={resultado: movie1}
        }
        if(request.body.nationality !== null){movie1.setNationality(request.body.nationality)
            respuesta = {resultado: movie1}
        }
        if(request.body.language !== null){movie1.setLanguaje(request.body.language)
            respuesta = {resultado: movie1}
        }
        if(request.body.isMCU !== null){movie1.setIsMCU(request.body.isMCU)
            respuesta = { resultado: movie1}
        }
        if(request.body.mainCharacterName !== null){movie1.setMainCharacterName(request.body.mainCharacterName ),
            respuesta = {resultado: movie1}
        }
        if(request.body.platform !== null){movie1.setPlataform(request.body.platform),
            respuesta = {resultado: movie1}
        }
        if(request.body.distributor !== null){movie1.setDistributor(request.body.distributor),
            respuesta = {resultado: movie1}
        }
        if(request.body.genre !== null){movie1.setGenre(request.body.genre),
            respuesta = {resultado: movie1}
        }
    }
    response.send(respuesta);
})


app.put("/pelicula/actor", function (request, response) {
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
      resultado: movie1.actors[id],
    };
  }
  response.send(respuesta);
});

app.put("/pelicula/director", function (request, response) {
  let respuesta;
  if (director != undefined) {
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
      resultado: movie1.writer,
    };
  }
  response.send(respuesta);
});

app.put("/pelicula/guionista", function (request, response) {
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
      resultado: movie1.writer,
    };
  }
  response.send(respuesta);
});

app.delete("/pelicula", function (response, request) {
  if (movie1 != null) {
    movie1 = null;
    respuesta = {
      mensaje: "La pelicula ha sido borrada",
      resultado: movie1,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "La pelicula no existe",
      ressultado: movie1,
    };
  }
  response.send(respuesta);
});
app.delete("/pelicula/actor", function (request, response) {
  let id = request.query.id;
  let respuesta;
  if (id != undefined) {
    movie1.actors.splice(id, 1);
    respuesta = {
      mensaje: "Actor borrado",
      resultado: movie1.getActors(),
    };
  }
  response.send(respuesta);
});

app.delete("/pelicula/director", function (request, response) {
  let respuesta;
  if (id != undefined) {
    movie1.writer = null;
    respuesta = {
      mensaje: "Director borrado",
      resultado: movie1,
    };
  }
  response.send(respuesta);
});
app.delete("/pelicula/guionista", function (request, response) {
  let respuesta;
  if (id != undefined) {
    movie1.writer = null;
    respuesta = {
      mensaje: "guionista borrado",
      resultado: movie1,
    };
  }
  response.send(respuesta);
});
app.listen();
