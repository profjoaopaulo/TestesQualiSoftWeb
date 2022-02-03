//__tests__/index.test.js
const repository = require('./produtoRepository');

test('findAll', async () => {
    const result = await repository.findAll(10);
    expect(result.length).toEqual(1);
})