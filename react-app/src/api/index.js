export async function signUp(username, password) {
  throw new NotImplemented();
}

export async function signIn(username, password) {
  throw new NotImplemented();
}

export async function set(token, date, text) {
  throw new NotImplemented();
}

export async function enumerate(token, from, to) {
  throw new NotImplemented();
}

export async function setPref(token, key, value) {
  throw new NotImplemented();
}

export async function getPref(token) {
  throw new NotImplemented();
}

export class ErrorUsernameAlreadyExists extends Error {}
export class ErrorInvalidUsernameOrPassword extends Error {}
export class NotImplemented extends Error {}
