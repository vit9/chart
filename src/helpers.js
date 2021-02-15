

class Generator {
    constructor(symbolsToGenerate) {
      this.alphabet = symbolsToGenerate || 'Aa1Bb2Cc3Dd4Ee5Ff6Gg7Hh8Ii9Jj0Kk1Ll2Mm3Nn4Oo5Pp6Qq7Rr8Ss9Tt0Uu1Vv2Ww3Xx4Yy5Zz9';
      this.chars = ['a', 2, 'b', 3, 'c', 8, 'd', 4, 'e', 1, 'k', 1, 'n', 7, 'f', 5];
    }
  
    generationEngine(randomArrayOfSymbols, maxSize) {
      let id = '';
      for (let i = 0; i < randomArrayOfSymbols.length; i++) {
        let random = Number((Math.random() * maxSize).toFixed());
        id += randomArrayOfSymbols[random >= maxSize ? maxSize - 1 : random];
      }
      return id;
    }
  
    defaultKeyGenerator(splitter) {
      let id = '';
      let diff = 0;
      for (let i = 0; i < this.chars.length; i++) {
        let random = +(Math.random() * 15).toFixed();
        id += this.chars[random >= 15 ? 14 : random];
        if (i + diff % 3 === 0 && i !== 0) {
          if (i !== this.chars.length - 1) {
            id += splitter;
            diff += 1;
          }
        }
      }
      return id;
    }
  
    specificGenerator(keySize) {
      const key_len = this.alphabet.length;
      const randomArrayOfSymbols = new Array(keySize).fill().map((_) => {
        const random = Number((Math.random() * key_len).toFixed());
        return this.alphabet[(random >= key_len ? key_len - 1 : random)];
      });
      return this.generationEngine(randomArrayOfSymbols, randomArrayOfSymbols.length);
    }
  }
  
  export default Generator;