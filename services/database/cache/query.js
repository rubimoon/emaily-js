const mongoose = require('mongoose');

module.exports = (client) => {
  mongoose.Query.prototype.cache = function (options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || 'default');
    return this;
  };

  const exec = mongoose.Query.prototype.exec;
  mongoose.Query.prototype.exec = async function () {
    const key = JSON.stringify(
      Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name,
      })
    );

    if (!this.useCache) {
      return exec.apply(this, arguments);
    }

    const cacheValue = await client.hGet(this.hashKey, key);

    if (cacheValue) {
      console.log('Serving from Redis');
      const doc = JSON.parse(cacheValue);
      return Array.isArray(doc)
        ? doc.map((d) => new this.model(d))
        : new this.model(doc);
    }

    console.log('Serving from MongoDB');
    const result = await exec.apply(this, arguments);

    client.hSet(this.hashKey, key, JSON.stringify(result));

    return result;
  };
};
