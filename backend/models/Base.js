const databaseSettings = require('../knexfile').development;
const knex = require('knex')(databaseSettings);
const pry = require('pryjs');

class Base {

    // all functions work the way they do in Ruby with ActiveRecord
    // so far it's only been tested with sqlite3
    
    constructor(thang) {
        Object.assign(this, thang)
    }

    static get tableName() {
        return this.name.toLowerCase();
    }

    // => self.all
    static async all() {
        const arr = await knex(this.tableName + 's');
        return arr;
    }

    // find by id
    static async find(id) {
        const [ record ] = await knex(this.tableName + 's').where({ id: id });
        return new this(record);
    }

    static async findBy(obj) {
        // console.log(knex);
        try {
            // console.log(knex)
            const [user] = await knex('users').where(obj)
            return new this(user);
        } catch(err) {
            return { status: 'no such user', err };
        }
    }

    // takes an obj and creates a new record in db
    static async create(obj) {
        const [ recordId ] = await knex(this.tableName + 's').insert(obj)
        const [ record ] = await knex(this.tableName + 's').where({ id: recordId })
        return new this(record);
    }

    // INSTANCE method that take obj and updates that record
    async update(obj) {
        await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id }).update(obj);
        const [ record ] = await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id })
        return new this.constructor(record);
    }

    async delete() {
        await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id }).del();
    }

    static belongsTo(name) {
        this.prototype[name] = async function() {
            const [ record ] = await knex(name.toLowerCase() + 's').where({ id: this[`${name}_id`] });
            return record;
        }
    }

    static hasMany(name, opts = {}) {
        if (opts.through) {
            this.prototype[name] = async function() {
                try {
                    const arr = await knex(name)
                            .innerJoin(opts.through, `${name}.id`, `${opts.through}.${name.substr(0, name.length -1)}_id`)
                            .where({ [`${opts.through}.${this.constructor.tableName}_id`]: this.id })
                            .select(`${name}.*`)
                            .groupBy(`${name}.id`)
                        return arr
                } catch(err) {
                    console.error('oh no', err);
                }
                
            }
            return 'ayy lmao';
        }

        this.prototype[name] = async function() {
            const arr = await knex(name).where({ [`${this.constructor.tableName}_id`]: this.id});
            return arr;
        }
    }
}

module.exports = Base