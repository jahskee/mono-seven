const redis = require("redis");
const { promisifyAll } = require("bluebird");

let client: any = null;

export const getRedisClient = () => {
  if (client === null) {
    promisifyAll(redis);
    client = redis.createClient({
      host: "localhost",
      port: "6379",
    });
  }
  return client;
};
