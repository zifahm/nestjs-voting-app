export type Stack = ROUTES.RootApp | ROUTES.RootUnAuth;

export enum ROUTES {
  RootUnAuth = "RootUnAuth",
  RootApp = "RootApp",

  UnAuthMain = "UnAuthMain",
  UnAuthLogin = "UnAutLogin",
  UnAuthSignup = "UnAuthSignup",

  AppMain = "AppMain",

  MainHome = "MainHome",

  HomePoll = "HomePoll",

  HomeProfile = "HomeProfile"
}
