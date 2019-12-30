const Base = require('./Base');
const bcrypt = require('bcrypt');
// const Base = require('knex-base');
const databaseSettings = require('../knexfile').development;
const auth = require('../auth/local');

class User extends Base {
    static boi() {
        return 'boiiiiiii'
    }

    static async createUser(obj) {
        const salt = await bcrypt.genSalt();
        obj.password = await bcrypt.hash(obj.password, salt);
        return await this.create(obj);
    }

    static async comparePass(userPassword, dbPassword) {
        return await bcrypt.compare(userPassword, dbPassword);
    }

    static async checkUser(username, userPassword) {
        try {
            const user = await this.findBy({username});
            const bool = await this.comparePass(userPassword, user.password);
            return {user, bool};
        } catch (err) {
            const user = {status: 'failed to find user'}
            const bool = false
            return {user, bool}
        }
        
    }

    static async ensureAuthenticated(req, res, next) {
        if (!(req.headers && req.headers.authorization)) {
            return res.status(400).json({status: 'Please log in'});
        }

        const header = req.headers.authorization.split(' ');
        const token = header[1];
        auth.decodeToken(token, (err, payload) => {
            // console.log(payload);
            if (err) {
                return res.status(401).json(err);
            }
            // return (payload.sub);
            next();
        })

    }

}

module.exports = User;

