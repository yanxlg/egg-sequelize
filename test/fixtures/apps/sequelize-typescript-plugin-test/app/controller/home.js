'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.sequelizeTypescriptPlugin.name;
  }
}

module.exports = HomeController;
