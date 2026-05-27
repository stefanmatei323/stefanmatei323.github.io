// src/data.js
export const proiecteInginerie = [
  {
    id: 1,
    categorie: "Embedded",
    img: "/kit_tele.png",
    statusKey: "active", // Albastru în CSS
    ro: { 
      title: "Kit Telemetrie Auto", 
      subtitle: "Monitorizare CAN Bus în timp real", // Subtitrare RO
      desc: "Modul de telemetrie auto cu afișaj multiplu, utilizând ESP32, diferiți senzori și comunicație CAN (OBD-II), integrând două ecrane OLED SPI pentru monitorizarea în timp real a temperaturii, presiunii și tensiunii.", 
      status: "Activ",
      tags: ["C++", "ESP32", "CAN"] 
    },
    en: { 
      title: "Car Telemetry Kit", 
      subtitle: "Real-time CAN Bus Monitoring", // Subtitrare EN
      desc: "Automotive telemetry module with a multi-display setup, utilizing an ESP32, various sensors, and CAN (OBD-II) communication, integrating two SPI OLED screens for real-time monitoring of temperature, pressure, and voltage.", 
      status: "Active",
      tags: ["C++", "ESP32", "CAN"] 
    }
  },
  {
    id: 2,
    categorie: "Android",
    link: "https://github.com/stefanmatei323/HotWheelsCastingCatalog" ,
    img: "/hwcc.png",
    statusKey: "completed", // Gri în CSS pentru mentenanță
    ro: { 
      title: "Primul Proiect - HotWheelsCC", 
      subtitle: "", // Subtitrare RO
      desc: "Urmărește valoarea colecției tale HotWheels și organizează-ți mașinuțele diecast cu ușurință.", 
      status: "Finalizat",
      tags: ["Android Studio", "Java"] 
    },
    en: { 
      title: "First Project - HotwheelsCC", 
      subtitle: "", // Subtitrare EN
      desc: "Track your HotWheels collection's value and organize your diecast cars with ease.", 
      status: "Completed",
      tags: ["Android Studio", "Java"] 
    }
  },
  {
    id: 3,
    categorie: "Automotive", //noua categorie
    link: "", 
    img: "/wankel.png", // Poza cu motorul
    statusKey: "completed", 
    
    ro: {
      title: "Reconstrucție Motor Mazda RX-8",
      desc: "Reconstrucția completă a motorului rotativ Wankel 13B-MSP, incluzând înlocuirea pieselor defecte si verificarea toleranțelor.",
      status: "Finalizat",
      tags: ["Mecanică", "Motor Wankel", "Hardware"]
    },
    
    en: {
      title: "Mazda RX-8 Engine Rebuild",
      desc: "Complete rebuild of the 13B-MSP Wankel rotary engine, including replacement of defective parts and verification of tolerances.",
      status: "Completed",
      tags: ["Mechanics", "Wankel Engine", "Hardware"]
    }
  }
];

export const translations = {
  ro: {
    home: "Acasă",
    projects: "Proiecte",
    homeTitle: "Bun venit pe site-ul meu!", // Titlu Hero
    bioShort: "Student la Electronică, Telecomunicații si Tehnologii informaționale.", // Subtitlu Hero
    about: "Despre mine",
    contact: "Contact",
    catEmbedded: "Sisteme Embedded & IoT",
    catAndroid: "Dezvoltare Android",
    catAutomotive: "Mecanică & Automotive",
    cvBtn: "Descarcă CV",
    bio: "Sunt student în cadrul facultății de Electronică, Telecomunicații și Tehnologii informationale, în paralel cu studiile, îmi place să experimentez aplicând teoria în proiecte practice.\n\n Pasiunea mea principală este intersecția dintre design, electronică și mecanică auto, lucru care se reflectă în majoritatea lucrărilor postate aici. Cred în colaborare și în software-ul liber (Open Source), motiv pentru care vreau să împărtășesc soluțiile găsite. Acest site este un spațiu în continuă creștere, unde postez progresul meu tehnic și noile direcții în care aleg să mă dezvolt.",
    viewBtn: "Vezi Proiect",
    lang: "EN"
  },
  en: {
    home: "Home",
    projects: "Projects",
    homeTitle: "Welcome to my website!", // Titlu Hero
    bioShort: "Electronics, Telecommunications and IT Student.", // Subtitlu Hero
    about: "About me",
    contact: "Contact",
    catEmbedded: "Embedded Systems & IoT",
    catAndroid: "Android Development",
    catAutomotive: "Mechanics & Automotive",
    cvBtn: "Download CV",
    bio: "I am a student at the Faculty of Electronics, Telecommunications, and Information Technologies. Alongside my academic studies, I enjoy experimenting by applying theory to hands-on projects.\n\n My primary passion lies at the intersection of design, electronics, and automotive mechanics, a focus reflected in most of the work shared here. I am a firm believer in collaboration and Open Source software, which is why I choose to share the solutions I develop. This website is a constantly evolving space where I document my technical progress and the new directions in which I am growing.",
    viewBtn: "View Project",
    lang: "RO"
  }
};