import db from 'https://raw.githubusercontent.com/yababay/deno-pg-env/master/mod.js'
import {DATA_TYPES, Model} from 'https://deno.land/x/denodb/mod.ts';

class Manufacturers extends Model {
    static table = 'manufacturers';
    static timestamps = true;
    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        manufacturer: DATA_TYPES.STRING,
    }
}

db.link([Manufacturers])
await db.sync({ drop: true });
