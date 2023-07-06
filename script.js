fetch("https://icanhazdadjoke.com/slack")
    .then(data=>data.json())
    .then(jestData =>
    {
        const jestText = jestData.attachments[0].text;
        const jestElement = document.getElementById('jestElement');

        jestElement.innerHTML = jestText;
    })