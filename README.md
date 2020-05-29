# Deno's quick PostgreSQL connection

The program uses [postgres](https://deno.land/x/postgres/mod.ts) and [denoenv](https://deno.land/x/denoenv) modules. Please create in current direcrory `.env`-file, for example:

```
PG_DATABASE = my_db
PG_USERNAME = me
PG_PASSWORD = qwerty123
```

Then use the module as:

```javascript
import client from 'https://raw.githubusercontent.com/yababay/deno-pg-env/master/mod.js'

async function main() {
    await client.connect();
    const result = await client.query("SELECT * FROM people;");
    console.log(result.rows);
    await client.end();
}

main();
```

Run the program with `deno`:

```bash
deno run --allow-read --allow-env  --allow-net seed.js
```
