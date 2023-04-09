function reverseWords(str) {
    const a = str.split(' ');
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].split("").reverse().join(""));
    }
    return b.join(' ');
  }

console.log(reverseWords("hello world"));