function palindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[_\W]/g, "");
  const reversedFormattedStr = formattedStr.split("").reverse().join("");

  return formattedStr === reversedFormattedStr;
}
