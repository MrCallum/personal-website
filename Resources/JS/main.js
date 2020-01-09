const context = {
    likes : [
        {
            mainText : "Favourite fruit",
            commentText : "Apples",
            hasImage : true,
            imgSource = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528",
        }
    ],
    dislikes : [
        {
            mainText : "Unpopular opinion",
            commentText : "Even though TV quality is higher than ever, I think ",
            hasImage : true,
            imgSource = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528",
        }
    ]
}

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource); // After calling Handlebars.compile() with an argument, a function is returned to the template. 
const compiledHtml = template(context); // template will accept an object and use the properties of the object to fill in a Handlebars template.
document.getElementById('information').innerHTML = compiledHtml;