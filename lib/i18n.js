export const LANGS = ["es", "en"];
export const DEFAULT_LANG = "es";

export const dictionary = {
  es: {
    meta: {
      title: "Fran Muñoz | Portfolio",
      description: "Portfolio personal de Fran Muñoz, desarrollador de software",
    },
    nav: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/services" },
      { name: "Sobre mí", path: "/resume" },
      { name: "Proyectos", path: "/work" },
      { name: "Contacto", path: "/contact" },
    ],
    hero: {
      role: "Desarrollador de Software",
      headline: "Hola, soy",
      name: "Fran Muñoz",
      summary:
        "Enfocado en crear soluciones eficientes y seguras, con experiencia en proyectos complejos y de alto impacto.",
      cta: "Descargar CV",
      cvFile: "/assets/resume/cv.pdf",
      cvName: "Fran_Munoz_CV.pdf",
    },
    stats: [
      { num: 2, text: "Años de experiencia" },
      { num: 3, text: "Proyectos completados" },
      { num: 8, text: "Tecnologías dominadas" },
    ],
    services: {
      items: [
        {
          num: "01",
          title: "Desarrollo Web",
          description: "Creo aplicaciones web a medida según tus necesidades.",
          href: "",
        },
        {
          num: "02",
          title: "UI/UX Design",
          description: "Diseño interfaces claras, rápidas y fáciles de usar.",
          href: "",
        },
        {
          num: "03",
          title: "Desarrollo Móvil",
          description: "Apps nativas y multiplataforma para Android e iOS.",
          href: "",
        },
        {
          num: "04",
          title: "SEO Técnico",
          description:
            "Optimizo tu sitio para mejorar rendimiento y posicionamiento.",
          href: "",
        },
      ],
    },
    work: {
      title: "Proyectos",
      subtitle: "Trabajo reciente",
      actions: {
        live: "Ver live",
        github: "Ver código",
        private: "Privado",
        soon: "Próximamente",
        details: "Ver proyecto",
      },
      detail: {
        description: "Descripción",
        stack: "Tecnologías",
        challenges: "Retos tecnológicos",
        links: "Enlaces",
        gallery: "Galería",
        back: "Volver a proyectos",
        notFound: "Proyecto no encontrado",
      },
      projects: [
        {
          num: "01",
          slug: "taxi-drivers-app",
          category: "Aplicación móvil para conductores de taxi",
          title: "App de gestión para conductores",
          description:
            "Aplicación móvil para Android e iOS que permite a los conductores registrar y gestionar su contabilidad diaria.",
          details:
            "Aplicación móvil enfocada en el día a día del conductor: registro de ingresos, gastos y reportes automáticos. Incluye panel de métricas y exportación de datos.",
          stack: [
            { name: "React Native" },
            { name: "MongoDB" },
            { name: "Express" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb1.png",
          gallery: [
            "/assets/work/thumb1.png",
            "/assets/work/thumb2.png",
            "/assets/work/thumb3.png",
          ],
          challenges: [
            "Sincronización offline y consistencia de datos.",
            "Diseño de reportes claros para conductores.",
            "Optimización de rendimiento en móviles.",
          ],
          live: "",
          github: "",
        },
        {
          num: "02",
          slug: "sports-alerts-platform",
          category: "Plataforma de alarmas deportivas",
          title: "Alertas para ojeadores",
          description:
            "Plataforma que permite a ojeadores de fútbol suscribirse a alertas sobre jugadores, con integración web y móvil.",
          details:
            "Sistema de alertas personalizado para scouts: reglas por posición, edad y rendimiento. Panel web para gestión y app móvil para notificaciones en tiempo real.",
          stack: [
            { name: "React Native" },
            { name: "MongoDB" },
            { name: "Express" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb2.png",
          gallery: [
            "/assets/work/thumb2.png",
            "/assets/work/thumb1.png",
            "/assets/work/thumb3.png",
          ],
          challenges: [
            "Motor de reglas flexible y escalable.",
            "Notificaciones en tiempo real.",
            "Gestión de roles y permisos.",
          ],
          live: "",
          github: "",
        },
        {
          num: "03",
          slug: "taxi-operations-portal",
          category: "Portal de gestión integral para taxi",
          title: "Suite de operaciones",
          description:
            "Portal web para gestión integral de servicios de taxi: contabilidad, mantenimiento de vehículos y gestión de personal.",
          details:
            "Portal completo para administración de flotas y operaciones internas. Incluye módulos de mantenimiento, turnos, facturación y reportes en tiempo real.",
          stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb3.png",
          gallery: [
            "/assets/work/thumb3.png",
            "/assets/work/thumb1.png",
            "/assets/work/thumb2.png",
          ],
          challenges: [
            "Arquitectura modular por áreas.",
            "Dashboards con datos en tiempo real.",
            "Control de acceso por roles.",
          ],
          live: "",
          github: "",
        },
      ],
    },
    contact: {
      title: "Trabajemos juntos",
      intro: "Creemos algo nuevo.",
      notice:
        "Formulario en construcción. Si lo prefieres, escríbeme por email.",
      form: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        phone: "Teléfono",
        servicePlaceholder: "Selecciona un servicio",
        services: [
          { value: "web", label: "Desarrollo Web" },
          { value: "uiux", label: "Diseño UI/UX" },
          { value: "backend", label: "Backend" },
        ],
        message: "Escribe tu mensaje aquí.",
        submit: "Enviar mensaje",
      },
      info: [
        {
          title: "Teléfono",
          description: "(+34) 684 12 58 45",
        },
        {
          title: "Email",
          description: "hola@franciscomunozmontoro.com",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        about: "Sobre mí",
      },
      about: {
        title: "Sobre mí",
        description:
          "Apasionado de la informática desde pequeño; siempre me encontrarás con algún proyecto entre manos.",
        info: [
          { fieldName: "Nombre", fieldValue: "Francisco Muñoz Montoro" },
          { fieldName: "Teléfono", fieldValue: "(+34) 684 12 58 45" },
          { fieldName: "Experiencia", fieldValue: "2+ años" },
          { fieldName: "Nacionalidad", fieldValue: "Española" },
          { fieldName: "Freelance", fieldValue: "Disponible" },
          { fieldName: "Idiomas", fieldValue: "Español, Inglés, Catalán" },
          { fieldName: "Correo", fieldValue: "hola@franciscomunozmontoro.com" },
        ],
      },
      experience: {
        title: "Mi experiencia",
        description:
          "Desarrollador full-stack con más de dos años de experiencia, especializado en aplicaciones web y móviles.",
        items: [
          {
            company: "Freelance",
            position: "Portal de gestión integral para taxi",
            duration: "01/2024 - Presente",
          },
          {
            company: "Freelance",
            position: "Aplicación móvil para conductores de taxi",
            duration: "05/2023 - 12/2023",
          },
          {
            company: "Freelance",
            position: "Plataforma de alarmas deportivas",
            duration: "06/2022 - 03/2023",
          },
        ],
      },
      education: {
        title: "Mi educación",
        description: "",
        items: [
          {
            institution: "Universidad Politécnica de Valencia",
            degree: "Grado en Ingeniería Informática",
            duration: "2018 - 2023",
          },
        ],
      },
      skills: {
        title: "Mis habilidades",
        description: "",
        list: [
          { name: "html 5" },
          { name: "css 3" },
          { name: "javascript" },
          { name: "react.js" },
          { name: "next.js" },
          { name: "tailwind css" },
          { name: "node.js" },
          { name: "figma" },
        ],
      },
    },
    social: {
      github: "",
      linkedin: "",
      youtube: "",
      twitter: "",
    },
  },
  en: {
    meta: {
      title: "Fran Muñoz | Portfolio",
      description: "Personal portfolio of Fran Muñoz, software developer",
    },
    nav: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/resume" },
      { name: "Projects", path: "/work" },
      { name: "Contact", path: "/contact" },
    ],
    hero: {
      role: "Software Developer",
      headline: "Hi, I'm",
      name: "Fran Muñoz",
      summary:
        "Focused on building efficient and secure solutions, with experience in complex, high-impact projects.",
      cta: "Download CV",
      cvFile: "/assets/resume/cv.pdf",
      cvName: "Fran_Munoz_CV.pdf",
    },
    stats: [
      { num: 2, text: "Years of experience" },
      { num: 3, text: "Completed projects" },
      { num: 8, text: "Technologies mastered" },
    ],
    services: {
      items: [
        {
          num: "01",
          title: "Web Development",
          description: "I build tailored web apps for your needs.",
          href: "",
        },
        {
          num: "02",
          title: "UI/UX Design",
          description: "Clean, fast and user-friendly interfaces.",
          href: "",
        },
        {
          num: "03",
          title: "Mobile Development",
          description: "Native and cross-platform apps for Android and iOS.",
          href: "",
        },
        {
          num: "04",
          title: "Technical SEO",
          description: "Performance and ranking optimizations for your site.",
          href: "",
        },
      ],
    },
    work: {
      title: "Projects",
      subtitle: "Recent work",
      actions: {
        live: "View live",
        github: "View code",
        private: "Private",
        soon: "Coming soon",
        details: "View project",
      },
      detail: {
        description: "Description",
        stack: "Technologies",
        challenges: "Technical challenges",
        links: "Links",
        gallery: "Gallery",
        back: "Back to projects",
        notFound: "Project not found",
      },
      projects: [
        {
          num: "01",
          slug: "taxi-drivers-app",
          category: "Taxi driver mobile app",
          title: "Driver management app",
          description:
            "Mobile app for Android and iOS that helps drivers register and manage daily accounting.",
          details:
            "Mobile-first product for day-to-day driver operations: income tracking, expenses and automated reports. Includes a metrics dashboard and exportable data.",
          stack: [
            { name: "React Native" },
            { name: "MongoDB" },
            { name: "Express" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb1.png",
          gallery: [
            "/assets/work/thumb1.png",
            "/assets/work/thumb2.png",
            "/assets/work/thumb3.png",
          ],
          challenges: [
            "Offline sync and data consistency.",
            "Clear reporting for drivers.",
            "Performance optimization on mobile.",
          ],
          live: "",
          github: "",
        },
        {
          num: "02",
          slug: "sports-alerts-platform",
          category: "Sports scouting alerts platform",
          title: "Scouting alerts",
          description:
            "Platform for football scouts to subscribe to player alerts, with web and mobile integration.",
          details:
            "Custom alerts platform for scouts: rules by position, age and performance. Web admin panel plus a mobile app for real-time notifications.",
          stack: [
            { name: "React Native" },
            { name: "MongoDB" },
            { name: "Express" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb2.png",
          gallery: [
            "/assets/work/thumb2.png",
            "/assets/work/thumb1.png",
            "/assets/work/thumb3.png",
          ],
          challenges: [
            "Flexible and scalable rules engine.",
            "Real-time notifications.",
            "Role and permissions management.",
          ],
          live: "",
          github: "",
        },
        {
          num: "03",
          slug: "taxi-operations-portal",
          category: "Taxi operations portal",
          title: "Operations suite",
          description:
            "Full web portal for taxi operations: accounting, vehicle maintenance and staff management.",
          details:
            "Full operations portal for fleet and internal management. Includes maintenance, shifts, billing and real-time reporting modules.",
          stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Node.js" },
          ],
          image: "/assets/work/thumb3.png",
          gallery: [
            "/assets/work/thumb3.png",
            "/assets/work/thumb1.png",
            "/assets/work/thumb2.png",
          ],
          challenges: [
            "Modular architecture by domain.",
            "Real-time dashboards.",
            "Role-based access control.",
          ],
          live: "",
          github: "",
        },
      ],
    },
    contact: {
      title: "Let's work together",
      intro: "Let's build something new.",
      notice: "Form coming soon. Feel free to email me in the meantime.",
      form: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        phone: "Phone number",
        servicePlaceholder: "Select a service",
        services: [
          { value: "web", label: "Web Development" },
          { value: "uiux", label: "UI/UX Design" },
          { value: "backend", label: "Backend" },
        ],
        message: "Write your message here.",
        submit: "Send message",
      },
      info: [
        {
          title: "Phone",
          description: "(+34) 684 12 58 45",
        },
        {
          title: "Email",
          description: "hola@franciscomunozmontoro.com",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        about: "About",
      },
      about: {
        title: "About me",
        description:
          "Passionate about computing since childhood; always building software or hardware projects.",
        info: [
          { fieldName: "Name", fieldValue: "Francisco Muñoz Montoro" },
          { fieldName: "Phone", fieldValue: "(+34) 684 12 58 45" },
          { fieldName: "Experience", fieldValue: "2+ years" },
          { fieldName: "Nationality", fieldValue: "Spanish" },
          { fieldName: "Freelance", fieldValue: "Available" },
          { fieldName: "Languages", fieldValue: "Spanish, English, Catalan" },
          { fieldName: "Email", fieldValue: "hola@franciscomunozmontoro.com" },
        ],
      },
      experience: {
        title: "My experience",
        description:
          "Full-stack developer with over two years of experience building web and mobile apps.",
        items: [
          {
            company: "Freelance",
            position: "Taxi operations portal",
            duration: "01/2024 - Present",
          },
          {
            company: "Freelance",
            position: "Taxi driver mobile app",
            duration: "05/2023 - 12/2023",
          },
          {
            company: "Freelance",
            position: "Sports scouting alerts platform",
            duration: "06/2022 - 03/2023",
          },
        ],
      },
      education: {
        title: "My education",
        description: "",
        items: [
          {
            institution: "Universidad Politécnica de Valencia",
            degree: "B.Sc. in Computer Engineering",
            duration: "2018 - 2023",
          },
        ],
      },
      skills: {
        title: "My skills",
        description: "",
        list: [
          { name: "html 5" },
          { name: "css 3" },
          { name: "javascript" },
          { name: "react.js" },
          { name: "next.js" },
          { name: "tailwind css" },
          { name: "node.js" },
          { name: "figma" },
        ],
      },
    },
    social: {
      github: "",
      linkedin: "",
      youtube: "",
      twitter: "",
    },
  },
};
