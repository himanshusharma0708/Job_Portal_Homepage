/* ===== FILTER FUNCTIONS ===== */
function filterJobs(type) {
    document.querySelectorAll("#jobCards .job-card").forEach(card => {
        card.style.display =
            type === "all" || card.dataset.type === type
                ? "block"
                : "none";
    });
}

function filterInternships(type) {
    document.querySelectorAll("#internshipCards .job-card").forEach(card => {
        card.style.display =
            type === "all" || card.dataset.type === type
                ? "block"
                : "none";
    });
}

/* ===== OPEN LINK ===== */
function openLink(url) {
    window.open(url, "_blank");
}

/* ===== IMAGE FALLBACK ===== */
function fixImage(img) {
    img.onerror = () => {
        img.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";
    };
}

/* ===== JOB & INTERNSHIP NEWS (GUARANTEED 5) ===== */

const GNEWS_API_KEY = "697faa6e30e0de3add886ea5f8babb62";

const jobKeywords = [
    "job hiring",
    "recruitment drive",
    "campus placement",
    "internship hiring",
    "company hiring freshers",
    "employment news"
];

const newsContainer = document.getElementById("newsContainer");
let collectedArticles = [];
let keywordIndex = 0;

function fetchJobNews() {
    if (collectedArticles.length >= 5 || keywordIndex >= jobKeywords.length) {
        renderNews();
        return;
    }

    const query = jobKeywords[keywordIndex++];
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        query
    )}&lang=en&max=10&token=${GNEWS_API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.articles) {
                data.articles.forEach(article => {
                    if (
                        collectedArticles.length < 5 &&
                        article.title &&
                        article.description
                    ) {
                        collectedArticles.push(article);
                    }
                });
            }
            fetchJobNews();
        })
        .catch(() => fetchJobNews());
}

function renderNews() {
    newsContainer.innerHTML = "";

    collectedArticles.slice(0, 5).forEach(article => {
        const card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <img src="${article.image || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'}" onerror="fixImage(this)">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <button onclick="openLink('${article.url}')">Read More</button>
        `;

        newsContainer.appendChild(card);
    });
}

/* ===== START NEWS FETCH ===== */
fetchJobNews();