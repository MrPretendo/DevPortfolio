// Datos del portafolio
const portfolioData = {
    name: "Alex",
    title: "Frontend Engineer",
    heroDescription: "I'm a product designer and front-end web developer. I'm passionate about creating meaningful experiences through design and technology.",
    experience: [
        {
            company: "Figma",
            position: "Frontend Engineer",
            period: "April 2019 - Present",
            location: "San Francisco, CA"
        },
        {
            company: "Slack",
            position: "Frontend Engineer",
            period: "July 2017 - March 2019",
            location: "San Francisco, CA"
        },
        {
            company: "Quip",
            position: "Frontend Engineer",
            period: "July 2015 - June 2017",
            location: "San Francisco, CA"
        }
    ],
    skills: [
        { name: "Javascript", experience: "5 years experience" },
        { name: "Typescript", experience: "5 years experience" },
        { name: "React", experience: "5 years experience" },
        { name: "Node.js", experience: "3 years experience" }
    ],
    contact: {
        location: "San Francisco, CA",
        email: "johndoe@gmail.com",
        linkedin: "linkedin.com/johndoe",
        github: "github.com/johndoe"
    }
};

// Función para manejar el envío del formulario de contacto
function handleContactFormSubmit(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[placeholder="Email address"]');
    const email = emailInput.value;
    if (email) {
        console.log(`Formulario enviado con email: ${email}`);
        // Aquí podrías agregar código para enviar el email a un servidor
        alert('Thanks for your interest! We will get in touch soon.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Función para agregar interactividad a los botones de la barra de navegación
function setupNavigation() {
    const navButtons = document.querySelectorAll('header button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Clicked: ${button.getAttribute('aria-label')}`);
            // Aquí podrías agregar funcionalidad específica para cada botón
        });
    });
}

// Función para configurar el reproductor de música
function setupMusicPlayer() {
    const audio = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const closeButton = document.getElementById('close-player');
    const musicPlayer = document.getElementById('music-player');

    audio.volume = 0.2; // Iniciar al 20% del volumen

    // Intenta reproducir automáticamente
    audio.play().then(() => {
        playPauseButton.textContent = 'Pause';
    }).catch(error => {
        console.log('Autoplay prevented:', error);
        playPauseButton.textContent = 'Play';
    });

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    closeButton.addEventListener('click', () => {
        musicPlayer.style.display = 'none';
        audio.pause();
    });
}

// Función para inicializar el portafolio
function initPortfolio() {
    console.log("Initializing portfolio...");

    // Configurar el formulario de contacto
    const contactForm = document.querySelector('label.flex.flex-col');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Configurar la navegación
    setupNavigation();

    // Inicializar el reproductor de música
    setupMusicPlayer();

    console.log("Portfolio initialized successfully.");
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initPortfolio);

// Función de utilidad para actualizar el contenido dinámicamente (por si lo necesitas en el futuro)
function updateContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

// Ejemplo de cómo podrías usar la función updateContent:
// updateContent('hero-title', portfolioData.name);
// updateContent('hero-description', portfolioData.heroDescription);