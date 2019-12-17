// const Base = require('./Base');
// import Base from './Base';
const Base = require('knex-base');

class User extends Base {
    static boi() {
        return 'boiiiiiii'
    }
}

module.exports = User;

