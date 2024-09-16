exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    
    table.integer("user_id").references("id").inTable("notes").onDelete("cascade");
   
    table.integer("user_id").references("id").inTable("users");

   table.text("name");
 
    
  
});

exports.down = knex => knex.schema.dropTable("tags");