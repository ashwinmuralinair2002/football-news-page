const isTransferArticle = window.location.pathname.includes("/transfers/");
const siteRoot = isTransferArticle ? "../../" : "../";
const heading = document.querySelector("h1");
const hero = document.querySelector(".imaag");
const paragraphs = Array.from(document.querySelectorAll("p"));

if (!heading || !hero) {
  console.error("Unable to create the article layout: a title or featured image is missing.");
} else {
  // Inject Inter font if not already loaded
  if (!document.querySelector('link[href*="Inter"]')) {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    document.head.appendChild(fontLink);
  }

  const header = document.createElement("header");
  header.className = "article-site-top";
  header.innerHTML = `
    <a class="brand-link" href="${siteRoot}index.html" aria-label="Here We Go home">
      <img class="logo" src="${siteRoot}logo.jpg" alt="Here We Go">
    </a>`;

  const nav = document.createElement("nav");
  nav.className = "article-nav";
  nav.setAttribute("aria-label", "Main navigation");
  nav.innerHTML = `
    <a href="${siteRoot}index.html">Home</a>
    <a href="${siteRoot}index.html#football-news">Football News</a>
    <a href="${siteRoot}index.html#transfers">Transfer News</a>
    <a href="${siteRoot}index.html#ranking">Rankings</a>
    <a href="${siteRoot}index.html#about">About</a>
    <button class="article-logout-btn" onclick="articleLogout()">Logout</button>`;

  const main = document.createElement("main");
  main.className = "article-main";
  const article = document.createElement("article");
  article.className = "article-card";
  heading.classList.add("article-heading");

  const meta = document.createElement("p");
  meta.className = "article-meta";
  meta.textContent = `Here We Go Desk · ${isTransferArticle ? "Transfer News" : "Football News"}`;

  hero.className = "article-hero";
  const content = document.createElement("div");
  content.className = "article-copy";
  paragraphs.forEach((p) => content.append(p));

  article.append(heading, meta, hero, content);
  main.append(article);

  const footer = document.createElement("footer");
  footer.className = "article-footer";
  footer.innerHTML = `
    <p>This is a demo website made by <strong>Ashwin Murali Nair</strong></p>
    <p>Contact: <a href="mailto:ashwinmuralinair2002@gmail.com">ashwinmuralinair2002@gmail.com</a></p>`;

  document.querySelector("header")?.remove();
  document.body.classList.add("article-page");
  document.body.replaceChildren(header, nav, main, footer);

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.rel = "noopener noreferrer";
  });
}

function articleLogout() {
  localStorage.removeItem("isLoggedIn");
  window.location.replace(siteRoot + "login.html");
}
