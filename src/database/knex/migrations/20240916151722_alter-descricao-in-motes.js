/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("notes", (builder) => {
    builder.renameColumn("descrição", "descricao");
    return builder
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("notes", (builder) => {
        builder.renameColumn("descricao", "descrição");
        return builder
      })
  
};
