
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.dbconn; //"mongodb+srv://guilhermegracioto_db_user:senhaDB>@cluster0fw2.7oekpit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0fw2";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
module.exports = (app) => {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
  app.dbClient = client

}
