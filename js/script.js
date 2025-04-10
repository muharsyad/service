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
        title: "Privat & Grup Belajar Data Science & AI",
        description: "Jasa mengajar data science, machine learning, AI, dan matematika",
        img: "assets/thumbnail-service-1.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Konsultasi Proyek Data & Machine Learning",
        description: "Bimbingan merancang solusi data dan AI yang tepat Sasaran",
        img: "assets/thumbnail-service-6.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Mentoring Data Research",
        description: "Bimbingan teknik dan logika berpikir untuk penelitian di bidang data, AI, dan matematika",
        img: "assets/thumbnail-service-2.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Audit Model Machine Learning",
        description: "",
        img: "assets/thumbnail-service-3.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Template Dashboard Interaktif",
        description: "Dashboard siap pakai dan custom",
        img: "assets/thumbnail-service-7.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Pre-trained AI Models",
        description: "JModel prediksi churn, klasifikasi review, deteksi anomali, dan lainnya.",
        img: "assets/thumbnail-service-8.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Konten Edukasi untuk Brand",
        description: "",
        img: "assets/thumbnail-service-9.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Modul Pelatihan Custom",
        description: "Disusun sesuai kebutuhan level dan topik: dari dasar sampai tingkat lanjut",
        img: "assets/thumbnail-service-4.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Pembersihan & Pra-pemrosesan Data",
        description: "Jasa pembersihan dan pra-pemrosesan data untuk penelitian, bisnis, atau model training",
        img: "assets/thumbnail-service-5.png",
        link: "https://wa.me/+6282324761705"
    }, {
        title: "Web App Berbasis Machine Learning",
        description: "Web app mini untuk sistem rekomendasi, klasifikasi, chatbot, dan lainnya.",
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

