const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await find(client,"pmishra2k3","pass1234");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function find(client,user,password){
  const result=await client.db("bsafe").collection("userlogs").findOne({User_id: user,Password: password});
  if (result){
    console.log("Success");
  }
  else{
    console.log("Failure");
  }
}
