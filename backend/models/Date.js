const Base = require('knex-base');
const databaseSettings = require('../knexfile').development;
const knex = require('knex')(databaseSettings);

class Date extends Base {
    static async findBy(obj) {
        const [date] = await knex('dates').where(obj);
        // console.log(date);
        return date ? new this(date) : false;
        return new this(date);
    }

}

module.exports = Date;