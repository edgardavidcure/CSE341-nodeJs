async function main(){

    const dotenv = require("dotenv");
    const { MongoClient } = require("mongodb");
    dotenv.config();
    
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kvhxnxj.mongodb.net/?retryWrites=true&w=majority`;
    
    const client = new MongoClient(uri);
    
    try {
    
        await client.connect();
        await listDatabases(client);
    
    } catch (error) {
    
        console.error(error)
    
    } finally {
    
       await client.close()
    
    };
    
    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
    
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log( ` - ${db.name}`));
    };
    
    
}

main().catch(console.error);
