import getEnv from 'https://raw.githubusercontent.com/yababay/deno-env-filter/master/mod.js'
import {Client} from "https://deno.land/x/postgres/mod.ts"

const host = getEnv('PG_HOST') || 'localhost'
const port = getEnv('PG_PORT') || 5432
const user = getEnv('PG_USER') || getEnv('PG_USERNAME')
const password = getEnv('PG_PASSWORD')
const database = getEnv('PG_DATABASE')

if(!user || !password || !database) throw 'The Postgres connection parameters are unsufficient.'

export default new Client({port, host, user, password, database})

/*
import * as dotenv from 'https://deno.land/x/denoenv/mod.ts'
import {Client} from "https://deno.land/x/postgres/mod.ts"

dotenv.config()
const env = Deno.env.toObject()
env.PG_HOST = env.PG_HOST || 'localhost'
env.PG_PORT = env.PG_PORT || 5432
env.PG_USER = env.PG_USER || env.PG_USERNAME

if(!env.PG_USER || !env.PG_PASSWORD || !env.PG_DATABASE) throw 'The Postgres connection parameters are unsufficient.'

export default new Client(
    Object.keys(env)
        .filter($=> $.match(/^PG_/))
        .map($=> [$, env[$]])
        .map($=> [$[0].replace(/^PG_/, '').toLowerCase(), $[1]])
        .reduce((acc, $)=> {
            acc[$[0]] = $[1]
            return acc
        }, {})
)
*/
