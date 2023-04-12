var username=document.getElementById("user").value;
var pass=document.getElementById("password").value;
const { MongoClient } = require('mongodb');
async function main(){
    const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await find(client,username,pass);
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
        console.log("Data found");
    }
    else{
        console.log("No data found");
    }
}