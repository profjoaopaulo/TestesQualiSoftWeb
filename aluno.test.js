const m = require('./aluno');

test('a média de 4 e 5 é 4.5', () => {

    expect(m(4, 5)).toBe(4.5);
});

test('a média de 6.7 e 3.9 é 5.3', () => {

    expect(m(6.7, 3.9)).toBe(5.3);
});

test('adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('não existe I em team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('mas existe "stop" em Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });