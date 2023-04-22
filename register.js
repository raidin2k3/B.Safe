const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await insert(client,"Pranshu Mishra",9910288061,"noidafam@gmail.com","pmishra2k3","pass1234","Noida");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function insert(client,full_name,phone,email,username,password,locate){
    await client.db("bsafe").collection("userlogs").insertOne({
        Name: full_name,
        Phone_id: phone,
        Email_id: email,
        User_id: username,
        Password: password,
        Location: locate
    });
    console.log("Data stored successfully");
}