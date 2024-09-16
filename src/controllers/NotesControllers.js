const knex = require("../database/knex");

class NotesControllers{
    async create(request, response){
        const {titulo, descricao, nota} = request.body;
        const {user_id} = request.params;

        const {node_id} = await knex("notes").insert({
            titulo,
            descricao,
            user_id

        });
   

       
        return response.json();

    }
}

module.exports= NotesControllers;

