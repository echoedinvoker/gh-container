import { MongoClient } from 'mongodb';

// const connectionProtocol = process.env.MONGODB_CONNECTION_PROTOCOL || 'mongodb+srv';
// const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS || 'cluster0.tefzwkz.mongodb.net';
// const dbUser = process.env.MONGODB_USERNAME || 'echoedinvoker';
// const dbPassword = process.env.MONGODB_PASSWORD || 'CfQoBFGjjEuY67MD';
const connectionProtocol = 'mongodb+srv';
const clusterAddress = 'cluster0.tefzwkz.mongodb.net';
const dbUser = 'echoedinvoker';
const dbPassword = 'CfQoBFGjjEuY67MD';
const dbName = process.env.MONGODB_DB_NAME; 'gha-demo';

const uri = `${connectionProtocol}://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority&appName=Cluster0`;
console.log('MongoDB URI:', uri);
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  console.log('Connected to MongoDB server...');
  await client.connect();
  console.log('Connected to MongoDB server successfully');
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
  process.exit(1);
}

const database = client.db(dbName);

export default database;
