const { json } = require('body-parser');
const express = require('express');
const { title } = require('process');
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

class Movie {
    constructor(title, releaseYear, nationality, language , isMcu, mainCharacterName , platform, genre) {
        this.title = title
        this.releaseYear = releaseYear
        //this.actors = actors
        this.nationality = nationality
        //this.director = director
        //this.writer = writer
        this.language = language
        this.platform = platform
        this.isMCU = isMcu
        this.mainCharacterName = mainCharacterName
        //this.distributor = distributor
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
        this.director.mostrarDatos()
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

}


//let movie1 = new Movie("Vengadores",2018,"EEUU","ingles",true, "Tony Stark","Disney", "accion")
//let movie2 = new Movie("Raya y el dragon", 2021,"EEUU", "ingles",false, "Raya", "Disney", "animacion")
//let movie3 = new Movie("La trinchera infinita", 2019, "España",false, "Higinio","Netflix", "drama")
//let movie4 = new Movie("Guns Akimbo", 2019, "Nueva Zelanda","ingles", false, "Miles", "Amazon", "accion")
let movie = null;

let respuesta;
app.get("/pelicula", function(request, response){

    if( movie!=null){
         respuesta = movie;
    }
    else{
        respuesta = {
            error:true,
            codigo: 200,
            mensaje: "No hay pelicula"
        }
    }
  response.send(respuesta);
});

app.post("/pelicula", function(request, response){

    if(movie === null) {

        movie = {
            title : request.body.title,
            releaseYear: request.body.releaseYear,
            nationality: request.body.nationality,
            language: request.body.language,
            isMCU: request.body.isMCU,
            mainCharacterName: request.body.mainCharacterName,
            distributor: request.body.distributor,
            genre: request.body.genre
        }
        respuesta = {
             error: true,
             codigo: 200,
             mensaje: "Pelicula creada",
             resultado: movie,
        }
    } 
    else{
        respuesta = {
            error:true,
            codigo: 200,
            mensaje: "Esta peli ya existe",
            resultado: null
        }
    }
    response.send(respuesta);
});


app.put("/pelicula", 

function(request,response){

    if(movie = !null){

        if(request.body.title != null){

            movie.title = request.body.title,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.releaseYear != null){

            movie.releaseYear = request.body.releaseYear,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.nationality != null){

            movie.nationality = request.body.nationality,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.language != null){

            movie.language = request.body.language,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.isMCU != null){
            movie.isMCU = request.body.isMCU,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.mainCharacterName != null){
            movie.mainCharacterName = request.body.mainCharacterName,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.distributor != null){
            movie.distributor = request.body.distributor,
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "La pelicula ha sido actualizada",
                resultado: movie
            }
        }

        if(request.body.genre != null){
            movie.genre = request.body.genre,
            respuesta = {
                error: true,
                codigo: 200,
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
            resultado: movie,
        }
    }
    response.send(respuesta)
});

app.delete("/pelicula",

function(response, request){
    if( movie != null){
        movie = null;
        respuesta = {
            error: true,
            codigo:200,
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

app.listen();
