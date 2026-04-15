const { generateStrongPassword, isStrongPassword } = require('../index');

describe('password utilities', () => {
  test('generates a strong password with the requested length', () => {
    const randomValues = [
      0 / 73, 26 / 73, 52 / 73, 62 / 73, 1 / 73, 27 / 73, 53 / 73, 63 / 73,
      2 / 73, 28 / 73, 54 / 73, 64 / 73,
    ];
    const randomSpy = jest.spyOn(Math, 'random').mockImplementation(() => randomValues.shift() ?? 0);

    const password = generateStrongPassword(12);

    expect(password).toHaveLength(12);
    expect(isStrongPassword(password)).toBe(true);

    randomSpy.mockRestore();
  });

  test('detects strong and weak passwords', () => {
    expect(isStrongPassword('Hello World')).toBe(false);
    expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
  });

  test('retries until it finds a strong password', () => {
    const randomValues = [
      ...Array(8).fill(0),
      0 / 73, 26 / 73, 52 / 73, 62 / 73, 1 / 73, 27 / 73, 53 / 73, 63 / 73,
    ];
    const randomSpy = jest.spyOn(Math, 'random').mockImplementation(() => randomValues.shift() ?? 0);

    const password = generateStrongPassword(8);

    expect(password).toBe('Aa0!Bb1@');
    expect(isStrongPassword(password)).toBe(true);

    randomSpy.mockRestore();
  });
});
