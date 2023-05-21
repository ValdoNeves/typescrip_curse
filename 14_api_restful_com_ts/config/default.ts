const dbUser = process.env.DB_USER
const dbPsword = process.env.DB_PSWORD
const typeEnv = process.env.TYPE_ENV

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPsword}@cluster0.jkghsio.mongodb.net/?retryWrites=true&w=majority`,
  env: typeEnv
}