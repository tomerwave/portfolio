import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  git,
  docker,
  layerx,
  ofek,
  tonkean,
  carrent,
  jobit,
  tripguide,
  fireblocks,
  java,
  springboot,
  postgres,
  kafka,
  redis,
  kubernetes,
  terraform,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: web,
  },
  {
    title: "Team Leader",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ofek Unit, Israeli Air Force",
    icon: ofek,
    iconBg: "#383E56",
    date: "October 2017 - May 2019",
    points: [
      "Developed and maintained RESTful and GraphQL sevices that could handle 1,000+ requests while maintaining high performance.",
      "Built a CI/CD pipelines using Jenkins, Docker Kubernetes and custom scripts - helping the teams to deploy more than 15 times a day.",
      "Deployed our services to a private OpenShift environment.",
      "Migrated huge amounts of data from a different lagacy system to ours, while new incoming data needed to be processes in realtime in less than a second.",
    ],
  },
  {
    title: "Senior Software Enginner",
    company_name: "Tonkean",
    icon: tonkean,
    iconBg: "#E6DEDD",
    date: "June 2019 - July 2022",
    points: [
      "Designed and implemented a core service to export and import entities in Tonkean with little to no code maintenance, this allowed us to create many features, from coping actions to bot community shop.",
      "Implemented integrations with various products such as DocuSign, Ironclad and more..",
      "Implemented a infrastructure for handling upload and download of files from various integrations.",
      "Organized Tonkean's technical meetups, gave lectures about our technologies, vision and challenges.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "LayerX Security",
    icon: layerx,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: [
      "Lead the architecture & implementation of a complex feature to enforce our Extension usage when accessing organizational applications.",
      "Lead the design & implementation of a SlackBot to automate different processes, such as Extension deployment, on call automation, incident management and more.",
      "Researched the different integrations LayerX services could connect to.",
      "In charge of all a group of customers and their requests, led a task force to design and implement the different requests.",
    ],
  },
  {
    title: "Software Engineering Team Leader",
    company_name: "LayerX Security",
    icon: layerx,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2024",
    points: [
      "Worked closely with our customer success and customers to showcase our features and debug issues.",
      "Lead a guild of team leads where we discussed cross r&d processes to ensure effectiveness and problem free day to day of our engineers.",
      "Worked closely with our tech leads to ensure engineering excellence across our system.",
      "Mentored my fellow team mates, help them set their professional goals and figure out together how to achieve them.",
      "Worked with the other team leaders & product managers to ensure projects were highly refined, designed well and arrive on time for customer's due dates.",
    ],
  },
  {
    title: "Senior Backend Engineer",
    company_name: "Fireblocks",
    icon: fireblocks, // TODO: add fireblocks logo
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Established cross R&D ADR/HLD process from the ground up.",
      "Refactored the team's services to be according to the best practices of the industry.",
      "Assimilated Airbnb's ESLint in our entire R&D.",
      "Mentored my fellow team mates, help them set their professional goals and figure out together how to achieve them.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
