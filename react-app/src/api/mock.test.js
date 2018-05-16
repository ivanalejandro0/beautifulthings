import * as api from './mock.js';

describe('Sign in', () => {
  test('can sign in', async () => {
    const token = await api.signIn('username', 'password');

    expect(token).toEqual(api.MOCK_TOKEN);
  });

  test('bad passphrase', async () => {
    api._signInBadPassword(true);

    try {
      const token = await api.signIn('username', 'password');
    } catch (e) {
      expect(e).toBeInstanceOf(api.ErrorInvalidUsernameOrPassword);
    }

    api._signInBadPassword(false);
  });
});

describe('Sign up', () => {
  test('can sign up', async () => {
    await api.signUp('username', 'password');
  });

  test('username already exists', async () => {
    api._signUpBadUsername(true);

    try {
      await api.signUp('username', 'password');
    } catch (e) {
      expect(e).toBeInstanceOf(api.ErrorUsernameAlreadyExists);
    }

    api._signUpBadUsername(false);
  });
});

describe('Enumerate items', () => {
  test('enumerate items', async () => {
    const entries = [ { date: 1, text: 'a' } ];
    api._setEntries(entries);
    const items = await api.enumerate('token', 'from-date', 'to-date');

    expect(items).toEqual(entries);
  });

  test('enumerate no items', async () => {
    const entries = [];
    api._setEntries(entries);
    const items = await api.enumerate('token', 'from-date', 'to-date');

    expect(items).toEqual(entries);
  });
});
