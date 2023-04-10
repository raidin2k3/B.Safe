const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
    await find(client)
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function find(client,namelist){
  const result=await client.db("bsafe").collection("userlogs").findOne({name: find});
  if (result){
    console.log(result);
  }
  else{
    console.log("No data found");
  }
}
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` -[${db.name}]`));
};