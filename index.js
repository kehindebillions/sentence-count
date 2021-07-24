// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.

const sentence = document.querySelector('.sentence-count').textContent
const vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
}

function sentenceCount(sentence) {
    let wordLength = 0
    let wordsNumber = 1
    let wordVowel = 0


    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            wordsNumber++
        }
        if (sentence[i] in vowels){
            wordVowel++
        }
        wordLength++
    }
    return {
        wordLength,
        wordsNumber,
        wordVowel
    }
}


console.log(sentenceCount(sentence))