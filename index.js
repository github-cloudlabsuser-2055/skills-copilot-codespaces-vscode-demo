function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

function extractNames(data) {
    return data.map(item => item.map(obj => obj.name));
}

// Example usage
const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];
const names = extractNames(data).flat();
console.log(names); // Output: ['John', 'Jane', 'Bob']

// Example usage
const input = "hello world from javascript";
const result = reverseSentence(input);
console.log(result); // Output: "Javascript from world hello"