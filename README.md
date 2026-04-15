# password-utilities

Small JavaScript helpers for creating and validating strong passwords.

## Installation

```bash
npm install @cinnamon05370/password-utilities
```

```bash
yarn add @cinnamon05370/password-utilities
```

## Usage

```js
const { generateStrongPassword, isStrongPassword } = require('@cinnamon05370/password-utilities');

const password = generateStrongPassword(12);
const strong = isStrongPassword(password);
```

### `generateStrongPassword(length)`

Generates a strong password using letters, numbers, and symbols. If the requested length is shorter than 8, the function uses 8 characters so the result can still be strong.

```js
generateStrongPassword(1);
// a strong password with at least 8 characters
```

### `isStrongPassword(password)`

Checks whether a password includes uppercase letters, lowercase letters, numbers, symbols, and at least 8 characters.

```js
isStrongPassword('Hello World');
// false

isStrongPassword('pC%mD8TpCKn2');
// true
```

## Contributing

1. Open an issue for bugs or feature ideas.
2. Fork the repository and create a branch.
3. Add tests for your change.
4. Open a pull request with a clear description.

See the templates in this repository for guidance.

## License

MIT. See `LICENSE.md`.
