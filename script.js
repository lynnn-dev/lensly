// Toggle Settings Sidebar
const settingsIcon = document.getElementById('settings-icon');
const settingsSidebar = document.getElementById('settings-sidebar');

settingsIcon.addEventListener('click', () => {
  settingsSidebar.classList.toggle('active');
});

// Dark / Light Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  themeToggle.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// Website Information
const websiteInfo = document.getElementById('website-info');

websiteInfo.addEventListener('click', () => {
  alert('This is a modern portfolio website created using HTML, CSS, and JavaScript.');
});

// Language Data
const translations = {
  en: {
    header: {
      title: "My Portfolio"
    },
    settings: {
      title: "Settings",
      language: "Language",
      theme: "Theme",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      websiteInfo: "Website Information"
    },
    about: {
      title: "About Me",
      description: "Hi, I'm Lensly, a passionate developer with expertise in software development, web development, and system programming. I love building things that make a difference!"
    },
    languages: {
      title: "Programming Languages",
      php: "PHP",
      python: "Python",
      javascript: "JavaScript",
      html: "HTML",
      css: "CSS"
    },
    roles: {
      title: "Roles",
      softwareDeveloper: "Software Developer",
      softwareDescription: "Building scalable and efficient software solutions.",
      websiteDeveloper: "Website Developer",
      websiteDescription: "Creating responsive and modern websites.",
      systemProgrammer: "System Programmer",
      systemDescription: "Developing low-level system applications."
    },
    connect: {
      title: "Connect With Me"
    },
    footer: {
      text: "© 2025 Lensly. All rights reserved."
    }
  },
  nl: {
    header: {
      title: "Mijn Portfolio"
    },
    settings: {
      title: "Instellingen",
      language: "Taal",
      theme: "Thema",
      darkMode: "Donkere Modus",
      lightMode: "Lichte Modus",
      websiteInfo: "Website Informatie"
    },
    about: {
      title: "Over Mij",
      description: "Hallo, ik ben Lensly, een gepassioneerde ontwikkelaar met expertise in softwareontwikkeling, webontwikkeling en systeemprogrammering. Ik hou ervan om dingen te bouwen die een verschil maken!"
    },
    languages: {
      title: "Programmeertalen",
      php: "PHP",
      python: "Python",
      javascript: "JavaScript",
      html: "HTML",
      css: "CSS"
    },
    roles: {
      title: "Rollen",
      softwareDeveloper: "Software Ontwikkelaar",
      softwareDescription: "Het bouwen van schaalbare en efficiënte softwareoplossingen.",
      websiteDeveloper: "Website Ontwikkelaar",
      websiteDescription: "Het creëren van responsieve en moderne websites.",
      systemProgrammer: "Systeemprogrammeur",
      systemDescription: "Het ontwikkelen van low-level systeemapplicaties."
    },
    connect: {
      title: "Verbinden Met Mij"
    },
    footer: {
      text: "© 2025 Lensly. Alle rechten voorbehouden."
    }
  },
  es: {
    header: {
      title: "Mi Portafolio"
    },
    settings: {
      title: "Configuración",
      language: "Idioma",
      theme: "Tema",
      darkMode: "Modo Oscuro",
      lightMode: "Modo Claro",
      websiteInfo: "Información del Sitio"
    },
    about: {
      title: "Sobre Mí",
      description: "Hola, soy Lensly, un desarrollador apasionado con experiencia en desarrollo de software, desarrollo web y programación de sistemas. ¡Me encanta construir cosas que marcan la diferencia!"
    },
    languages: {
      title: "Lenguajes de Programación",
      php: "PHP",
      python: "Python",
      javascript: "JavaScript",
      html: "HTML",
      css: "CSS"
    },
    roles: {
      title: "Roles",
      softwareDeveloper: "Desarrollador de Software",
      softwareDescription: "Construyendo soluciones de software escalables y eficientes.",
      websiteDeveloper: "Desarrollador de Sitios Web",
      websiteDescription: "Creando sitios web modernos y responsivos.",
      systemProgrammer: "Programador de Sistemas",
      systemDescription: "Desarrollando aplicaciones de bajo nivel."
    },
    connect: {
      title: "Conéctate Conmigo"
    },
    footer: {
      text: "© 2025 Lensly. Todos los derechos reservados."
    }
  }
};

// Function to Update Language
function updateLanguage(lang) {
  const data = translations[lang];

  // Update Header Title
  document.querySelector('header h1').textContent = data.header.title;

  // Update Settings Sidebar
  document.querySelector('#settings-sidebar h3').textContent = data.settings.title;
  document.querySelector('#settings-sidebar label[for="language-switcher"]').textContent = data.settings.language;
  document.querySelector('#settings-sidebar label[for="theme-toggle"]').textContent = data.settings.theme;
  document.querySelector('#theme-toggle').textContent = body.classList.contains('light-mode') ? data.settings.lightMode : data.settings.darkMode;
  document.querySelector('#website-info').textContent = data.settings.websiteInfo;

  // Update About Me Section
  document.querySelector('#about h2').textContent = data.about.title;
  document.querySelector('#about p').textContent = data.about.description;

  // Update Programming Languages Section
  document.querySelector('#languages h2').textContent = data.languages.title;
  document.querySelectorAll('#languages .skills-list li span')[0].textContent = data.languages.php;
  document.querySelectorAll('#languages .skills-list li span')[1].textContent = data.languages.python;
  document.querySelectorAll('#languages .skills-list li span')[2].textContent = data.languages.javascript;
  document.querySelectorAll('#languages .skills-list li span')[3].textContent = data.languages.html;
  document.querySelectorAll('#languages .skills-list li span')[4].textContent = data.languages.css;

  // Update Roles Section
  document.querySelector('#roles h2').textContent = data.roles.title;
  document.querySelectorAll('.role h3')[0].textContent = data.roles.softwareDeveloper;
  document.querySelectorAll('.role p')[0].textContent = data.roles.softwareDescription;
  document.querySelectorAll('.role h3')[1].textContent = data.roles.websiteDeveloper;
  document.querySelectorAll('.role p')[1].textContent = data.roles.websiteDescription;
  document.querySelectorAll('.role h3')[2].textContent = data.roles.systemProgrammer;
  document.querySelectorAll('.role p')[2].textContent = data.roles.systemDescription;

  // Update Connect Section
  document.querySelector('#social h2').textContent = data.connect.title;

  // Update Footer
  document.querySelector('footer p').textContent = data.footer.text;
}

// Language Switcher Event Listener
const languageSwitcher = document.getElementById('language-switcher');

languageSwitcher.addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  updateLanguage(selectedLanguage);
});

// Set Default Language on Page Load
document.addEventListener('DOMContentLoaded', () => {
  const defaultLanguage = 'en'; // Default language
  updateLanguage(defaultLanguage);
});
