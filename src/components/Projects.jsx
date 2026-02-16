import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Alpine Trail Co.",
    imgSrc: "/assets/img/alpinetrailco.png",
    description:
      "Frontend freelance e-commerce site for a premium off-road accessories company. Translated Figma/UI designs into responsive Next.js + TypeScript + Tailwind components.",
    viewUrl:
      "https://autoparts-freelance-9cb83x8xj-valerias-projects-1e59b880.vercel.app/",
    githubUrl: "https://github.com/vbisso/autoparts-freelance",
  },
  {
    title: "Kitchen Keeper",
    imgSrc: "/assets/img/kitchen-keeper.png",
    description:
      "Full-stack React Native app that helps users track food inventory and reduce waste. Built with React Native, Node.js, Express, and MongoDB, featuring barcode scanning and an AI-powered data-cleaning pipeline.",
    githubUrl: "https://github.com/vbisso/kitchen-keeper",
  },
  {
    title: "Buddy Reading API",
    imgSrc: "/assets/img/buddy-reading.png",
    description:
      "A backend web service that simulates a social network where users track their reading progress with friends. Built with Node.js, Express, and MongoDB, featuring RESTful endpoints, Swagger docs, and Jest testing.",
    viewUrl: "https://buddy-reading-tracker.onrender.com/api-docs/",
    githubUrl: "https://github.com/vbisso/buddy_reading_tracker-",
  },

  {
    title: "Order Tracker Dashboard",
    imgSrc: "/assets/img/order-tracker.png",
    description:
      "Responsive dashboard that simulates an Amazon-style order tracker. Built with React, TypeScript, and Tailwind CSS, featuring integration with a RESTful FakeStore API to dynamically fetch order and product data. Implements reusable components, and interactive filter functions.",
    viewUrl: "https://vbisso.github.io/order-tracker/",

    githubUrl: "https://github.com/vbisso/order-tracker",
  },
  {
    title: "Soap Shop Web Application",
    imgSrc: "/assets/img/soap_shop.png",
    description:
      "Full-stack e-commerce site built with Node.js, Express, PostgreSQL, and EJS.",
    viewUrl: "https://soap-shop-cse340.onrender.com/",
    githubUrl: "https://github.com/vbisso/soap-shop-cse340",
  },
  {
    title: "Island Park Expeditions",
    imgSrc: "/assets/img/ipe.png",
    description:
      "Static web app with modular JS and EJS templating for local tour company.",
    viewUrl: "https://ip-expeditions.netlify.app/",
    githubUrl: "https://github.com/vbisso/IPE",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-10 bg-stone-200 text-stone-900 py-10"
    >
      <h2 className="text-3xl sm:text-5xl text-center font-semibold mb-20">
        Check out some of my projects!
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
