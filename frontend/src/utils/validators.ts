import type { Dispatch } from "react";

export const checkValidUser = (user: string, setError: Dispatch<boolean>) => {
  const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;

  setError(false);

  if (!user || user.trim() == "") {
    setError(true);
  } else if (!userRegex.test(user)) {
    setError(true);
  } else {
    return user;
  }
};

export const checkValirEmail = (email: string, setError: Dispatch<boolean>) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  setError(false);

  if (!email || email.trim() == "") {
    setError(true);
  } else if (!emailRegex.test(email)) {
    setError(true);
  } else {
    return email;
  }
};

export const checkValidPwd = (
  password: string,
  setError: Dispatch<boolean>,
) => {
  const passRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  setError(false);

  if (!password || password.trim() == "") {
    setError(true);
  } else if (!passRegEx.test(password)) {
    setError(true);
  } else {
    return password;
  }
};

export const checkMathPwd = (
  password: string,
  matchPwd: string,
  setMatchError: Dispatch<boolean>,
) => {
  const passRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  setMatchError(false);
  if (!matchPwd || matchPwd.trim() == "") {
    setMatchError(true);
  } else if (matchPwd !== password) {
    setMatchError(true);
  } else if (!passRegEx.test(matchPwd)) {
    setMatchError(true);
  } else {
    return password;
  }
};

export const checkValidEntry = (entry: string, setErr: Dispatch<boolean>) => {
  setErr(false);

  if (!entry || entry == "") {
    setErr(true);
  } else {
    return entry;
  }
};
