import {blogPosts} from "/js/blog-data.js"

const hero = document.querySelector("#hero")
const blogCardsContainer = document.querySelector(".blog-cards-container")
const blogPostsReversed = blogPosts.reverse()

function renderHeroBlogPost() {
	const latestPost = blogPostsReversed[0]
	const {date, title, preview, image} = latestPost
	hero.style.backgroundImage = `url(${image})`
	const heroHTML = `
	<a href="/${latestPost.slug}.html">
	<p id="hero-date">${date}</p>
				<h2 id="hero-title">${title}</h2>
				<p id="hero-preview">
					${preview}
				</p></a>
				`

	hero.innerHTML = heroHTML
}

function renderBlogPost(blogPostsReversed, limit = null) {
	const postsToRender = limit ? blogPostsReversed.slice(0, limit) : blogPostsReversed.slice(1)
	const blogHTML = postsToRender
		.map(post => {
			const {image, alt, date, title, preview, slug} = post
			return `
			<a href="/${slug}.html">
				<div class="card">
					<img src="${image}" alt="${alt}" class="blog-img" />
					<p class="blog-date">${date}</p>
					
					<h3 class="blog-title">${title}</h3>
					
					<p class="blog-preview">${preview}</p>
					</div></a>
				`
		})
		.join(" ")

	blogCardsContainer.innerHTML += blogHTML
}

if (hero) {
	renderHeroBlogPost()
	renderBlogPost(blogPostsReversed)
}

renderBlogPost(blogPostsReversed, 3)
