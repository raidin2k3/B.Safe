const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
    await find(client,"pmishra2k3","pass1234");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function insert(client,inst){
  const result=await client.db("bsafe").collection("userlogs").insertOne(inst);
  if (result){
    console.log("Data added successfully");
  }
  else{
    console.log("Data could not be added");
  }
}
async function find(client,user,password){
  const result=await client.db("bsafe").collection("userlogs").findOne({User_id: user,Password: password});
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