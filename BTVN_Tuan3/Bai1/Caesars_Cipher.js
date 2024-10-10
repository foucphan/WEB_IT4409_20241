function rot13(str) {
  return str.replace(/[A-Z]/g, function (char) {
    let charCode = char.charCodeAt(0);
    return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
  });
}

rot13("SERR PBQR PNZC"); // Output: FREE CODE CAMP
rot13("SERR CVMMN!"); //Output: FREE PIZZA!
rot13("SERR YBIR?"); //Output: FREE LOVE?
