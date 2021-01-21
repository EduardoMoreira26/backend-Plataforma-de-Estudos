import knex from 'knex';

export async function up(knex: knex) {

  return knex.schema.createTable('users', table => {

  });
};

export async function down(knex: knex) {

};