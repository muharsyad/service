const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const themeIcon = toggleButton.querySelector("i");

// Cek preferensi dark mode dari localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

// Toggle Dark Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill"); // Ganti ikon ke matahari
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("ri-sun-fill", "ri-moon-fill"); // Ganti ikon ke bulan
    }
});

function toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

const courses = [
    {
        title: "Private and Group Data Science & AI Learning",
        description: "Teaching services for data science, machine learning, AI, and mathematics.",
        img: "assets/thumbnail-service-1.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Data & Machine Learning Project Consulting",
        description: "Guidance on designing targeted data and AI solutions",
        img: "assets/thumbnail-service-6.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Data Research Mentoring",
        description: "Technical and logical thinking guidance for research in the fields of data, AI, and mathematics",
        img: "assets/thumbnail-service-2.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Machine Learning Model Auditing",
        description: "",
        img: "assets/thumbnail-service-3.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Interactive Dashboard Templates",
        description: "Ready-to-use and custom dashboards",
        img: "assets/thumbnail-service-7.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Pre-trained AI Models",
        description: "Models for churn prediction, review classification, anomaly detection, and more.",
        img: "assets/thumbnail-service-8.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Educational Content for Brands",
        description: "",
        img: "assets/thumbnail-service-9.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Custom Training Modules",
        description: "Arranged according to level and topic needs: from basic to advanced",
        img: "assets/thumbnail-service-4.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Data Cleaning & Pre-processing",
        description: "Data cleaning and pre-processing services for research, business, or training models",
        img: "assets/thumbnail-service-5.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Machine Learning Based Web App",
        description: "Mini web app for recommendation system, classification, chatbot, and more.",
        img: "assets/thumbnail-service-10.png",
        link: "https://wa.me/+6282324761705"
    },
    // Tambahkan course lain jika ada
];


const options = {
    keys: ["title", "description"],
    threshold: 0.3 // Semakin kecil, semakin ketat pencariannya
};

const fuse = new Fuse(courses, options);


document.getElementById("search").addEventListener("input", function () {
    const query = this.value.trim(); // Hapus spasi di awal & akhir input
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Bersihkan kontainer sebelum menampilkan hasil

    // Jika input kosong, tampilkan semua kursus
    const filteredCourses = query ? fuse.search(query).map(r => r.item) : courses;

    filteredCourses.forEach(course => {
        container.innerHTML += `
            <div class="card-item flx-cl">
                <img src="${course.img}" alt="">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="cta-btn">
                    <a href="${course.link}" class="btn-1"><i class="ri-play-fill"></i> Mulai Kursus</a>
                </div>
            </div>
        `;
    });
});

