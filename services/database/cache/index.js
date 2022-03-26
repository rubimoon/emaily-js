const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);

client
  .connect()
  .then(() => {
    console.log('Successfully connected to Redis');
  })
  .catch(() => {
    console.log('Failed to connected to Redis');
  });

require('./query')(client);

async function cleanHash(hashKey) {
  await client.del(JSON.stringify(hashKey));
}

module.exports = {
  cleanHash,
};
