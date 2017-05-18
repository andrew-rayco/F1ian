
exports.up = function(knex, Promise) {
  return knex.schema.createTable('laptimes', function (table) {
    table.integer('raceId')
    table.integer('driverId')
    table.integer('lap')
    table.integer('position')
    table.string('time')
    table.integer('milliseconds')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('laptimes')
};
