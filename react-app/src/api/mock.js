export const MOCK_TOKEN = "TOKEN-HERE";

let entries = {};
let signedIn = false;
let signIn_fail = false;
let signUp_fail = false;

export function _signInBadPassword(fail) {
  signIn_fail = fail;
}

export function _signUpBadUsername(fail) {
  signUp_fail = fail;
}

export function _setEntries(e) {
  entries = e;
}

// Mocked API starts here:

export async function signUp(username, password) {
  if (signUp_fail) {
    throw new ErrorUsernameAlreadyExists();
  }

  return;
}

export async function signIn(username, password) {
  if (signIn_fail) {
    throw new ErrorInvalidUsernameOrPassword();
  }

  signedIn = true;
  return MOCK_TOKEN;
}

export async function set(token, date, text) {
}

export async function enumerate(token, from, to) {
  return entries;
}

export async function setPref(token, key, value) {
}

export async function getPref(token) {
}

export class ErrorUsernameAlreadyExists extends Error {}
export class ErrorInvalidUsernameOrPassword extends Error {}
