const { initDatabase, closeDatabase } = require('../database');
const { setPaste, getPaste } = require('./pastes');

describe('pastes', () => {
  beforeAll(async () => {
    await initDatabase(process.env.MONGO_URL, 'copypasta-jest');
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('should insert a paste', async () => {
    const mockPaste = {
      author: 'Donald Duck',
      value: 'zzzzZZZZZzzzz',
    };
    const pasteId = await setPaste(mockPaste);
    const insertedPaste = await getPaste(pasteId.toString());
    expect(insertedPaste).toEqual(expect.objectContaining(mockPaste));
  });
});
