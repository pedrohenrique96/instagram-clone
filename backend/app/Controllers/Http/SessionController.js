"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.only(["email", "password"]);
    const { token } = await auth.attempt(email, password);

    return { token };
  }
}

module.exports = SessionController;
