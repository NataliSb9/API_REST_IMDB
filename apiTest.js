app.post("/profesional",function( request,response){

    if (profesionales === null)
    {
        profesional = { 
            name: request.body.name,
            nationality: request.body.nationality,
            profesion: request.body.profesion,
            genre: request.body.genre,
            age: request.body.age,
            weight: request.body.weight,
            height: request.body.height,
            hairColor: request.body.hairColor,
            eyeColor: request.body.eyeColor,
            race: request.body.race,
            oscarsNumber: request.oscarsNumber.number,
            isRetired: request.body.isRetired,
        }
        profesionales.push(profesional)

        respuesta =  {
            error: true, 
            codigo: 200,
            mensaje: 'Profesional agregado a la base de datos de profesionales', 
            resultado: profesional,
        }
    }
    else {
        respuesta= { 
            error: true, 
            codigo: 200,
            mensaje: 'Profesional ya existe', 
            resultado: null
        }
    }
    response.send(respuesta)
});
    
app.put("/profesional",

function(request, response){ 
    
    if (profesionales != null){
        
        if (request.body.name != null){
            profesional.name = request.body.name; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }
        }    

        if(request.body.nationality != null){

            profesional.nationality = request.body.nationality;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }
        }
        
        if (request.body.profesional != null){
            
            profesional.profesional = request.body.profesional; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }            
        }

        if (request.body.profesional != null) 
            {profesional.genre = request.body.genre; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }            
        }
        if(request.body.age != null){
            profesional.age = request.body.age; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }
        }

        if(request.body.weight != null){
            profesional.weight = request.body.weight;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.height != null){
            profesional.height = request.body.height;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }


        if(request.body.eyesColor != null){
            profesional.eyesColor = request.body.eyesColor;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.hairColor != null){
            profesional.hairColor = request.body.hairColor;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.race != null){
            profesional.race = request.body.race;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.oscarsNumber != null){
            profesional.oscarsNumber = request.body.oscarsNumber;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.isRetired != null){
            profesional.isRetired = request.body.isRetired;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

    }else {
            respuesta = 
            {error: true, 
            codigo: 200, 
            mensaje: "El profesional no existe",
            resultado: profesional
        }
    }

    response.send(respuesta)
});
 
app.delete("/profesional",function(request, response){
    let respuesta
    if (profesional != null){
        profesional = null;
        respuesta = {
            error: false, 
            codigo:200, 
            mensaje: "Profesional borrado", 
            respuesta: profesional
        }
    }
    else
        respuesta = {
            error: true, 
            codigo: 200,
            mensaje: 'Profesional no existe', 
            resultado: profesional
        }
    
    response.send(respuesta);
});


    
    ("****************************");

    console.log(" - Name: " + this.name);
    console.log(" - Age: " + this.age);
    console.log(" - Genre: " + this.genre);
    console.log(" - Weight: " + this.weight);
    console.log(" - Height: " + this.height);
    console.log(" - Hair color: " + this.hairColor);
    console.log(" - Eye color: " + this.eyeColor);
    console.log(" - Race: " + this.race);
    console.log(" - Is retired?: " + this.isRetired);
    console.log(" - Nationality: " + this.nationality);
    console.log(" - Oscars Number: " + this.oscarsNumber);
    console.log(" - Profession: " + this.profession);
    console.log("****************************");


    " - Name: " + this.name;
    " - Age: " + this.age;
    " - Genre: " + this.genre;
    " - Weight: " + this.weight;
    " - Height: " + this.height;
    (" - Hair color: " + this.hairColor);
    (" - Eye color: " + this.eyeColor);
    (" - Race: " + this.race);
    (" - Is retired?: " + this.isRetired);
    (" - Nationality: " + this.nationality);
    (" - Oscars Number: " + this.oscarsNumber);
    (" - Profession: " + this.profession);


    /* "name":"Gwynealth Paltrol",
    "age": 55,
    "genre": "fem",
    "weight": 55,
    "height":172,
    "hairColor": "rubio",
    "eyesColor": "blue",
    "isRetired": false,
    "nationality": "British",
    "oscarsNumber": 0, */

    /* "resultado": {
        "name": "Gwynealth Paltrol",
        "age": 55,
        "genre": "fem",
        "weight": 55,
        "height": 172,
        "hairColor": "rubio",
        "eyeColor": "blue",
        "isRetired": false,
        "nationality": "British",
        "oscarsNumber": 0,
        "profession": "actress" */



    /* if (request.body.nationality != null) {
      profesional.nationality = request.body.nationality;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.profesional != null) {
      profesional.profesional = request.body.profesional;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.profesional != null) {
      profesional.genre = request.body.genre;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }
    if (request.body.age != null) {
      profesional.age = request.body.age;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.weight != null) {
      profesional.weight = request.body.weight;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.height != null) {
      profesional.height = request.body.height;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.eyesColor != null) {
      profesional.eyesColor = request.body.eyesColor;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.hairColor != null) {
      profesional.hairColor = request.body.hairColor;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.race != null) {
      profesional.race = request.body.race;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.oscarsNumber != null) {
      profesional.oscarsNumber = request.body.oscarsNumber;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }

    if (request.body.isRetired != null) {
      profesional.isRetired = request.body.isRetired;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "El profesional actualizado",
        resultado: profesional,
      };
    }
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "El profesional no existe",
      resultado: profesional,
    };
  }

  response.send(respuesta);
}); */
