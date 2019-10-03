"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PublicationSchema extends Schema {
  up() {
    this.create("publications", table => {
      table.increments();
      table.string("image").notNullable();
      table.text("description").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");;
      table.timestamps();
    });
  }

  down() {
    this.drop("publications");
  }
}

module.exports = PublicationSchema;
