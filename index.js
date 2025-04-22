function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}


// Example usage
const input = "hello world from javascript";
const result = reverseSentence(input);
console.log(result); // Output: "Javascript from world hello"