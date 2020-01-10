const context = {
    likes : [
        {
            mainText : "Favourite Paul Thomas Anderson Film",
            commentText : "Phantom Thread",
            imgSource : "https://thefilmstage.com/wp-content/uploads/2017/12/Phantom-Thread-header.jpg",
            link : "https://www.imdb.com/title/tt5776858/"
        }
    ]
}

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource); // After calling Handlebars.compile() with an argument, a function is returned to the template. 
const compiledHtml = template(context); // template will accept an object and use the properties of the object to fill in a Handlebars template.
document.getElementById('information').innerHTML = compiledHtml;

