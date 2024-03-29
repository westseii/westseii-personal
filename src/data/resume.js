const resumeContent = {
  education: {
    id: 0,
    name: "Education",
    entries: [
      {
        id: 0,
        name: "Iowa City, IA",
        desc: "University of Iowa",
        period: {
          from: "Aug 2018",
          to: "May 2022",
        },
        bullets: ["BA in Computer Science"],
      },
    ],
  },
  accomplishments: {
    id: 1,
    name: "Accomplishments",
    entries: [
      {
        id: 0,
        name: "CS Tutor",
        desc: "Intro to CS, CS 1",
        period: {
          from: 2018,
          to: 2019,
        },
        bullets: [
          "Assisted fellow students in understanding homework and project requirements. Taught introductory CS concepts and fundamentals in Java and Python.",
        ],
      },
      {
        id: 1,
        name: "Personal Website",
        desc: "Personal project",
        period: null,
        bullets: [
          "Built a custom personal website using Vue.js and adopted a single-page design using Vue Router.",
          "Wrote CSS style rules to make the site responsive for both desktop and mobile viewing.",
          "Set up hosting with Google Firebase.",
        ],
      },
      {
        id: 2,
        name: "Link Layer Characteristics",
        desc: "Class project",
        period: null,
        bullets: [
          "Successfully generated network node topologies and emulated a local virtual network using the Mininet Python API. Analyzed the connectivity and reachability of nodes within the network.",
          "Managed the Git repository for the project.",
        ],
      },
      {
        id: 3,
        name: "BGP Routing / Hijack Detection",
        desc: "Class project",
        period: null,
        bullets: [
          "Worked with real-world BGP router data to generate routing tables and successfully identify hijack attempts.",
        ],
      },
      {
        id: 4,
        name: "Web Intelligence Gathering",
        desc: "Class project",
        period: null,
        bullets: [
          "Successfully ran DNS queries, established connections, and traced the paths taken by packets over the web.",
        ],
      },
    ],
  },
  technicalSkills2: {
    id: 2,
    name: "Technical Skills",
    entries: [
      {
        id: 0,
        name: "Languages",
        desc: null,
        period: null,
        bullets: ["JavaScript (ES6+), HTML / CSS, Python 3, Java"],
      },
      {
        id: 0,
        name: "Frameworks / Libraries",
        desc: null,
        period: null,
        bullets: ["Vue.js (v3), PrimeVue, MongoDB (Express / Mongoose)"],
      },
      {
        id: 0,
        name: "Tools / Other",
        desc: null,
        period: null,
        bullets: ["Git, Terminal / Command line, npm / Yarn, Linux"],
      },
    ],
  },
  otherWork: {
    id: 3,
    name: "Other Work",
    entries: [
      {
        id: 0,
        name: "Community Content Creator",
        desc: "Game design / Asset creation",
        period: null,
        bullets: [
          "Worked with a game engine toolchain to design 3D architecture and assets. Took user feedback into account to improve all aspects of visual design and gameplay.",
          "Worked with the community to plan new updates. Pushed updates in bi-weekly / monthly sprints.",
          "Optimized the multiplayer server runtime by closely monitoring net graphs and reports to push the limits of the game engine.",
        ],
      },
    ],
  },
};

export default resumeContent;
