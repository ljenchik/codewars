function isAlt(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (word.length === 1) {return true}
    
    if (vowels.includes(word[0])) {
        for (let i = 0; i < vowels.length; i=i+2) {
            if (!(vowels.includes(word[i]))) {
                return false;
            }
            else {
                for (let i = 1; i < vowels.length; i=i+2) {
                    if (vowels.includes(word[i])) {
                        return false;
                    }
                }
            }
        }
    }
    else {
        for (let i = 0; i < vowels.length; i=i+2) {
            if (vowels.includes(word[i])) {
                return false;
            }
            else {
                for (let i = 1; i < vowels.length; i=i+2) {
                    if (!(vowels.includes(word[i]))) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
  }

  console.log(isAlt('amazon'));
  console.log(isAlt('apple'));
  console.log(isAlt('banana'));