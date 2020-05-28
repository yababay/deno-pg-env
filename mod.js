import * as dotenv from 'https://deno.land/x/denoenv/mod.ts'
import {Database} from 'https://deno.land/x/denodb/mod.ts'

dotenv.config()
const env = Deno.env.toObject()
const options = Object.keys(env)
    .filter($=> $.match(/^PG_/))
    .map($=> [$, env[$]])
    .map($=> [$[0].replace(/^PG_/, '').toLowerCase(), $[1]])
    .reduce((acc, $)=> {
        acc[$[0]] = $[1]
        return acc
    }, {})

export default new Database('postgres', options)
