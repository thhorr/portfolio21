//SEO Related settings
const seo = {
  title: "Yogendra's Portfolio",
  description:
    "A passionate Full Stack Web Developer 🚀 having an experience of building web applications with JavaScript / ReactJS / NodeJS / ExpressJS and some other cool libraries and frameworks.",
  og: {
    title: "Yogendra Singh Diwan Portfolio",
    type: "website",
    url: "https://dada-khalandar-portfolio.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Yogendra Singh Diwan",
  logo_name: "Yogendra Singh Diwan",
  subTitle:
    "A passionate Full Stack Web Developer 🚀 having an experience of building web applications with JavaScript / ReactJS / NodeJS / ExpressJS and some other cool libraries and frameworks.",

  resumeLink:
    "https://drive.google.com/drive/folders/1PiHTha4w6ljp3FKJi0BK6Y-sETP7yNbv",
  portfolio_repository: "https://github.com/kerrybli/portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/thhorr",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yogendra-singh-diwan-302a67178/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/codingwithmrm",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000",
  // },
  {
    name: "Gmail",
    link: "mailto:y.diwan95@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/yogendra.diwan",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Front End Tools",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building functionality front end websites",
        "⚡ Building reusable website components",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Back End Tools ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining the websites on various deployment platforms",
        "⚡ Storing and managing the data on MongoDB",
        "⚡ Creating backend application  in NodeJs,&  Express ",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "silver",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#e84d31",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "dark",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#499ebe",
          },
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },

        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "dark",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI Frameworks",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Creating the responsive web application's for various devices",
      ],
      softwareSkills: [
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#007fff",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full-stack web applications projects and deploy them to various hosting sites using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile1.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Front End, Back End, Full Stack, React, JavaScript.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Ozar, Dist.-Nashik, Maharashtra - 422206",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/d/viewer?msa=0&mid=1xS3vhxqaf9SjqMftocCob_cE-7c&ll=20.0795870157444%2C73.92930978600847&z=15",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8668550899",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
};

