let theNews = document.getElementById("theNews")

//Shows all the news when the page loads
let newsListDiv = news.articles.map(article => {

    return  `<div class="singleStory">
                <h4>${article.title}</h4>
                <p>by: ${article.author}<p>
                <p>${article.description}</p>
                <p><a href="${article.url}" target="_blank">Read More Here</a></p>
                <img src="${article.urlToImage}">
                <p>${article.publishedAt}</p>
                <hr>
                </div>`
})

theNews.innerHTML = newsListDiv.join('')

