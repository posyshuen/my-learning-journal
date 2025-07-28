import {blogPosts} from "/js/blog-data.js"

const hero = document.querySelector("#hero")
const blogCardsContainer = document.querySelector(".blog-cards-container")

function renderBlogPost() {
	const latestPost = blogPosts.pop()
	const {date, title, preview, image} = latestPost
	hero.style.backgroundImage = `url(${image})`
	const heroHTML = `
	<a href="/blog/${latestPost.slug}">
	<p id="hero-date">${date}</p>
				<h2 id="hero-title">${title}</h2>
				<p id="hero-preview">
					${preview}
				</p></a>
				`
	const blogHTML = blogPosts
		.slice(1) // Skip the latest post for the blog cards
		.map(post => {
			const {image, alt, date, title, preview} = post
			return `
			<a href="/blog/${post.slug}">
				<div class="card">
					<img src="${image}" alt="${alt}" class="blog-img" />
					<p class="blog-date">${date}</p>
					
					<h3 class="blog-title">${title}</h3>
					
					<p class="blog-preview">${preview}</p>
					</div></a>
				`
		})
		.join(" ")

	hero.innerHTML = heroHTML
	blogCardsContainer.innerHTML += blogHTML
}

renderBlogPost()
