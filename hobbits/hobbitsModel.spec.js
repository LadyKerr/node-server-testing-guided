const db = require('../data/dbConfig.js');

const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('insert()', () => {
    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'gaffer' }); // using the api

      const hobbits = await db('hobbits'); // directly looking into db

      expect(hobbits).toHaveLength(1);
    });

    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'elanor' }); // using the api
      await Hobbits.insert({ name: 'rose' }); // using the api

      const hobbits = await db('hobbits'); // directly looking into db

      expect(hobbits).toHaveLength(2);
    });
  });
});
