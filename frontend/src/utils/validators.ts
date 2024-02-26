import type { Dispatch } from "react";

export const checkValidUser = (user: string, setError: Dispatch<boolean>) => {
  const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;

  setError(false);

  if (typeof user === "undefined" || user.trim() == "") {
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

  if (typeof email === "undefined" || email.trim() == "") {
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

  if (typeof password === "undefined" || password.trim() == "") {
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
  if (typeof matchPwd === "undefined" || matchPwd.trim() == "") {
    setMatchError(true);
  } else if (matchPwd !== password) {
    setMatchError(true);
  } else if (!passRegEx.test(matchPwd)) {
    setMatchError(true);
  } else {
    return password;
  }
};

export const checkValidUserEmail = (
  userId: string,
  setUserErr: Dispatch<boolean>,
) => {
  //   const userRegex = /^[a-z0-9_-]{3,15}$/;
  //   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  setUserErr(false);

  //   if (typeof userId === 'undefined' || userId == '') {
  //     setUserErr(true);
  //   } else if (!emailRegex.test(userId) && !userRegex.test(userId)) {
  //     setUserErr(true);
  //   } else {
  // }
  return userId;
};
