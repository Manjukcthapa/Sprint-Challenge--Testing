const knex = require('knex');
const dbConf = require('../knexfile.js');

module.exports = knex(dbConf.development);