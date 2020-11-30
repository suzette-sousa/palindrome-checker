function palindrome(str) {
  let newStr = str.replace(/[\W_]/g,"").toLowerCase();
  let newStrReverse = newStr.split('').reverse().join('');
  return newStr === newStrReverse;
}

palindrome("A man, a plan, a canal. Panama");
