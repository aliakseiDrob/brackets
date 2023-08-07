module.exports = function check(str, bracketsConfig) {
  const stack = [];

  let stackTop;
  
  const isStackEmpty = (stack) => {
    if (stack.length === 0) {
      return true;
    }
  }

  const isStrElementOpenBracket = (strElement) => {
    let result;
    const hasOpenBracket = (element) => {
      if (strElement === element[0]) {
        result = true;
      }
    }
  
    bracketsConfig.forEach(hasOpenBracket);
  
    return result;
  }

  const isFirstBracketClosing = (strElement) => {
    let result;

    const hasClosingBracket = (element) => {
      if (strElement === element[1]) {
        result = true;
      }
    }
    bracketsConfig.forEach(hasClosingBracket);

    if (result === true && isStackEmpty(stack) === true) {
      return true;
    }
  }

  const compareClosingAndOpenBracket = (strElement) => {
    let result;

    const getPairBracket = (element) => {
      if (strElement === element[1]) {
        result = element[0];
      }
    }
    
    bracketsConfig.forEach(getPairBracket);
    return result;
  }

  
  
  [...str].forEach((bracket, index, array) => {
    stackTop = stack.at(-1);

    // add closing bracket to stack => 
    // stack won't be empty after all executuions in any way and 
    // so next function iteration could be emidiately stopped
    if (bracket !== '|') {
      if (isFirstBracketClosing(bracket)) {
        stack.push(bracket);
        return;
      }
    }

    if (stackTop) {
      if (stackTop === compareClosingAndOpenBracket(bracket)) {
        stack.pop();
        return;
      }
    }

    if (isStrElementOpenBracket(bracket)) {
      stack.push(bracket);
    } 
  })
  
  if (isStackEmpty(stack)) {
    return true;
  } else {
    return false;
  }
}
