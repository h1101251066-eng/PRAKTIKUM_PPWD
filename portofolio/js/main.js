// ========== 1. TYPING EFFECT ==========

const typingText = document.getElementById('typing-text');

const names = [
    ' Andini Salsabilla',
    ' Web Developer',
    ' Mahasiswa SI'
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentName = names[nameIndex];

    if (isDeleting) {

        typingText.textContent =
            currentName.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentName.substring(0, charIndex + 1);

        charIndex++;

    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentName.length) {

        delay = 2000;

        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        nameIndex = (nameIndex + 1) % names.length;

        delay = 500;

    }

    setTimeout(typeEffect, delay);
}

typeEffect();


// ========== 2. GENERATE PROJECT CARDS ==========

const projects = [

    {
        title: 'Website Profil',
        desc: 'Website profil dengan HTML & CSS',
        image: 'image/website.png'
    },

    {
        title: 'Kalkulator JS',
        desc: 'Kalkulator interaktif',
        image: 'image/kalkulator.jpeg'
    },

    {
        title: 'Form Interaktif',
        desc: 'Form pendaftaran dengan validasi',
        image: 'image/form.png'
    }

];

const projectGrid = document.getElementById('project-grid');

if (projectGrid) {

    projects.forEach(project => {

        const card = document.createElement('div');

        card.className = 'project-card';

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;

        card.addEventListener('click', () => {

            alert(`Anda memilih proyek: ${project.title}`);

        });

        projectGrid.appendChild(card);

    });

}


// ========== 3. DARK MODE ==========

const darkModeBtn = document.getElementById('dark-mode-btn');

if (darkModeBtn) {

    darkModeBtn.addEventListener('click', () => {

        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {

            darkModeBtn.textContent = '☀️';

        } else {

            darkModeBtn.textContent = '🌙';

        }

    });

}


// ========== 4. VALIDASI CONTACT FORM ==========

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        // Validasi nama
        if (nama === '') {
            alert('Nama harus diisi!');
            return;
        }

        // Validasi email
        if (email === '') {
            alert('Email harus diisi!');
            return;
        }

        if (!email.includes('@')) {
            alert('Email harus menggunakan format yang benar!');
            return;
        }

        // Validasi pesan
        if (pesan === '') {
            alert('Pesan harus diisi!');
            return;
        }

        // Jika semua sudah benar
        alert(`Terima kasih ${nama}, pesan kamu berhasil dikirim!`);

        contactForm.reset();

    });

}