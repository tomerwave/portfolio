import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  docker,
  layerx,
  ofek,
  tonkean,
  fireblocksystem,
  fireblocks,
  java,
  springboot,
  postgres,
  kafka,
  redis,
  kubernetes,
  terraform,
  aws,
  layerxsystem,
  tonkeansystem,
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
  {
    id: "github",
    title: "Github",
    link: "https://github.com/tomerwave",
  },
  {
    id: "medium",
    title: "Medium",
    link: "https://medium.com/@tomerwave",
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
    icon: fireblocks,
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
      "Worked with Tomer on a various projects, He is a true professional and an absolute tech wiz",
    name: "Ilan Rado",
    designation: "Product Director",
    company: "LinerB",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "From the beginning Tomer impressed me with its knowledge and quick learning ability. In no time Tomer started to tutor new comers to his team, and gain the respect of his commanders",
    name: "Shlomo Goldshtein",
    designation: "Chief Architect",
    company: "Amdocs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Tomer is a professional in his field, learns quickly and has excellent work ethic.",
    name: "Ori Rabi",
    designation: "Engineering Leader",
    company: "Placer.ai",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Tonkean",
    description:
      "Tonkean is the first-of-its-kind intake orchestration platform. Powered by AI, Tonkean helps enterprise internal service teams like procurement and legal create process experiences that people actually follow.",
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
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: tonkeansystem,
    source_code_link: "https://github.com/",
  },
  {
    name: "LayerX Security",
    description:
      "LayerX Enterprise Browser Extension protects the enterprise’s identities, SaaS apps, data and devices from web-borne threats and browsing risks, while maintaining a top-notch user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: layerxsystem,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fireblocks",
    description:
      "Fireblocks is a secure platform for institutions to manage and transfer digital assets, utilizing advanced security measures to protect assets from cyber threats and streamline transactions across wallets and exchanges.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "architecture",
        color: "pink-text-gradient",
      },
    ],
    image: fireblocksystem,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
