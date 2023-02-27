import { MongoClient } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_MONGO_URL, {
	minPoolSize: 10
});

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db('guardian-tales')