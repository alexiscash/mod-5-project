const databaseSettings = require('../knexfile').development;
const knex = require('knex')(databaseSettings);
const pry = require('pryjs');

class Base {

    // all functions work the way they do in Ruby with ActiveRecord
    
    constructor(thang) {
        Object.assign(this, thang)
    }

    static get tableName() {
        return this.name.toLowerCase();
    }

    // find by id
    static async find(id) {
        const [ thang ] = await knex(this.tableName + 's').where({ id: id });
        return new this(thang);
    }

    // => self.all
    static async all() {
        const arr = await knex(this.tableName + 's');
        return arr;
    }

    // takes an obj and creates a new record in db
    static async create(obj) {
        const [ thangId ] = await knex(this.tableName + 's').insert(obj)
        const [ thang ] = await knex(this.tableName + 's').where({ id: thangId })
        return new this(thang);
    }

    // INSTANCE method that take obj and updates that record
    async update(obj) {
        await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id }).update(obj);
        const [ thing ] = await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id })
        return (thing);
    }

    static belongsTo(name) {
        this.prototype[name] = async function() {
            // eval(pry.it);
            const [ thang ] = await knex(name.toLowerCase() + 's').where({ id: this[`${name}_id`] });
            // eval(pry.it);
            return thang;
        }
    }

    static hasMany(name) {
        this.prototype[name] = async function() {
            // eval(pry.it);
            let arr = await knex(name).where({ [`${this.constructor.tableName}_id`]: this.id });
            return arr;
        }
    }

    static testProto() {
        this.prototype.test = () => {
            return 'you know to to attach functions to the prototype bruh';
        }
    }

    static dope() {
        return 'ayy lmao';
    }
}

module.exports = Base