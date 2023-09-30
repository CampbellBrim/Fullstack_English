const fs = require('fs');

let data = `
# This is a heading
This is a paragraph with some text.

## This is a sub-heading
This is another paragraph.
`;

fs.writeFile('example.md', data, (err: Error) => {
    if (err) throw err;
    console.log('Markdown file has been saved!');
});


