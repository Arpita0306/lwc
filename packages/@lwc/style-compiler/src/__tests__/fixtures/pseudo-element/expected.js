function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return shadowSelector + "::after {}h1" + shadowSelector + "::before {}";
  /*LWC compiler vX.X.X*/
}
export default [stylesheet];