const dbUser = process.env.DB_USER
const dbPsword = process.env.DB_PSWORD

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPsword}@cluster0.jkghsio.mongodb.net/?retryWrites=true&w=majority`
}