# Deno's quick PostgreSQL connection

The program uses [denodb](https://deno.land/x/denodb) and [denoenv](https://deno.land/x/denoenv) modules. Please create in current direcrory `.env`-file, for example:

```
PG_DATABASE = my_db
PG_USERNAME = me
PG_PASSWORD = qwerty123
```

Then use the module as:

```javascript
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
```

Run the program with `deno`:

```bash
deno run --allow-read --allow-env  --allow-net seed.js
```
