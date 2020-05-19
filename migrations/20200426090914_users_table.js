exports.up = function(knex) {
    return knex.schema
        .createTable('user', table => {
            table.increments();
            table.string("username")
                .unique()
                .notNullable();
            table.string("password")
                .notNullable();

    })
        .createTable('officer', table => {
            table.increments();
            table.string('status')
                .notNullable();
            table.string('name')
                .notNullable();
            table.string('rank')
                .notNullable();
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('user')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
        });
  };

  exports.down = function(knex) {
	return knex.schema
		.dropTable('user')
		.dropTable('officer');
};

