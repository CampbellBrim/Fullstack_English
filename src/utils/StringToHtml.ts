const htmlString = `
<main>
    <h1>Convert a String to HTML</h1>
    <p>Learn how to convert a string to HTML using JavaScript.</p>
</main>
`;

const StringToHtml = (str: string = htmlString) => {
    // return str.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');

    const parser = new DOMParser();
    const html = parser.parseFromString(str, 'text/html');
    // console.log(html.body)

    return html.body;

};

export default StringToHtml;