import {
    mobile,
    backend,
    creator,
    web,
    copperleaf,
    rbc,
    ubc_cs,
    the_code_initiative,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Developer Intern",
      company_name: "Copperleaf Technologies Inc.",
      icon: copperleaf,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: ["placeholder",],
    },
    {
      title: "Full-stack Developer Intern",
      company_name: "Copperleaf Technologies Inc.",
      icon: copperleaf,
      iconBg: "#E6DEDD",
      date: "May 2022 - December 2022",
      points: ["placeholder",],
    },
    {
      title: "Coding Tutor",
      company_name: "The C.O.D.E. Initiative",
      icon: the_code_initiative,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: ["placeholder",],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "University of British Columbia",
      icon: ubc_cs,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Dec 2021",
      points: ["placeholder",],
    },
    {
      title: "Software QA Engineer Intern",
      company_name: "Royal Bank of Canada",
      icon: rbc,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Aug 2021",
      points: ["placeholder",],
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
  
  export { services,experiences, projects };