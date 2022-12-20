function caesarsCipher(str) {
  return str.replace(/[A-Z]/g, (char) => {
    let asciiValue = char.charCodeAt(0) + 13;

    if (asciiValue > 90) {
      asciiValue = (asciiValue % 90) + 64;
    }

    return String.fromCharCode(asciiValue);
  });
}
