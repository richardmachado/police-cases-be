
exports.up = function (knex) {
    return knex.schema
        .createTable('case', table => {
            table.increments();
            table.string("status")
                .notNullable();
            table.string("case_type")
                .notNullable();
            table.date("date")
                .notNullable();
            table.string("notes");
            table.integer("assigned_to")
                .unsigned()
                .references('id')
                .inTable('officer')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
        })
        .createTable('victim', table => {
            table.increments();
            table.string("name")
                .notNullable();
            table.string("sex")
                .notNullable();
            table.string("address");
            table.string("deceased")
            table.integer("case_id")
                .references('id')
                .inTable('case')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index()
                .notNullable();
            table.boolean("interviewed");
            table.string("notes");
    })
  
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('case')
        .dropTable('victim')
  
};
