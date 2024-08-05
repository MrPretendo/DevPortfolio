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

// Función para cambiar el GIF de fondo
function changeBackgroundGif() {
    const gifContainer = document.querySelector('.gif-container');
    const gifs = Array.from(gifContainer.children);
    
    const currentGif = gifs.find(gif => gif.style.opacity !== '0');
    let nextGif;

    do {
        nextGif = gifs[Math.floor(Math.random() * gifs.length)];
    } while (nextGif === currentGif && gifs.length > 1);

    if (currentGif) {
        currentGif.style.opacity = '0';
    }

    setTimeout(() => {
        nextGif.style.opacity = '1';
    }, 1000); // Esperar 1 segundo para que el GIF anterior se desvanezca

    // Programar el próximo cambio de GIF
    setTimeout(changeBackgroundGif, 9000); // Cambiar cada 9 segundos (8 segundos de visualización + 1 segundo de fundido)
}

// Función para inicializar los GIFs de fondo
function initBackgroundGifs() {
    const gifContainer = document.querySelector('.gif-container');
    const gifs = Array.from(gifContainer.children);

    // Configurar estilos para los contenedores de GIFs de GIPHY
    gifs.forEach(gif => {
        gif.style.opacity = '0';
    });

    // Iniciar con un GIF aleatorio
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    randomGif.style.opacity = '1';

    // Iniciar el cambio de GIFs
    setTimeout(changeBackgroundGif, 8000);
}

// Función para configurar el reproductor de música
function setupMusicPlayer() {
    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const closeButton = document.getElementById('close-player');
    const musicPlayer = document.getElementById('music-player');
    
    // Crear elemento de audio
    const audio = new Audio('https://plaza.one/mp3');
    audio.volume = 0.2; // Iniciar al 20% del volumen

    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    closeButton.addEventListener('click', () => {
        musicPlayer.style.display = 'none';
        audio.pause();
    });
}

// Función para configurar la navegación suave
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Función para inicializar el portafolio
function initPortfolio() {
    console.log("Initializing portfolio...");

    // Inicializar los GIFs de fondo
    initBackgroundGifs();

    // Configurar la navegación suave
    setupSmoothScrolling();

    // Inicializar el reproductor de música
    setupMusicPlayer();

    console.log("Portfolio initialized successfully.");
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initPortfolio);