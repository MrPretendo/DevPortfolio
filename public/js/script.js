// Función para cambiar el GIF de fondo
function changeBackgroundGif() {
    const gifItems = document.querySelectorAll('.gif-item');
    const currentGif = document.querySelector('.gif-item.active');
    let nextGif;

    do {
        nextGif = gifItems[Math.floor(Math.random() * gifItems.length)];
    } while (nextGif === currentGif && gifItems.length > 1);

    if (currentGif) {
        currentGif.classList.remove('active');
    }

    nextGif.classList.add('active');

    // Programar el próximo cambio de GIF
    setTimeout(changeBackgroundGif, 8000); // Cambiar cada 8 segundos
}

// Función para inicializar los GIFs de fondo
function initBackgroundGifs() {
    const gifItems = document.querySelectorAll('.gif-item');
    if (gifItems.length > 0) {
        // Asegurarse de que solo un GIF esté activo inicialmente
        gifItems.forEach((item, index) => {
            if (index === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Iniciar el cambio de GIFs
        setTimeout(changeBackgroundGif, 8000);
    }
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

    // Reproducción automática de música
    audio.play().then(() => {
        playPauseButton.textContent = 'Pause';
    }).catch(error => {
        console.log('Autoplay failed:', error);
        playPauseButton.textContent = 'Play';
    });

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

    // Configurar redirección de blog
    document.getElementById('blog-link').addEventListener('click', function() {
        window.location.href = 'https://graphic-portfolio-mrpretendo.web.app/index.html';
    });

    console.log("Portfolio initialized successfully.");
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initPortfolio);
