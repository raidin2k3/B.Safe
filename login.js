function findl(){
    if (typeof window !== "undefined") {
        var username=document.getElementById("user").value;
        var pass=document.getElementById("password").value;
        const { MongoClient, ServerApiVersion } = import('mongodb');
        async function main(){
            const uri = "mongodb+srv://user1:pass@bsafelogs.xj9kksu.mongodb.net/?retryWrites=true&w=majority";
            const client = new MongoClient(uri);
            alert("hi");
            try {
                alert("hi");
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
                alert("Logged in");
            }
            else{
                console.log("No data found");
                alert("Login failed!");
            }
        }
    }
}
