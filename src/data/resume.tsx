import { Icons } from "@/components/icons";
import { Icon } from '@iconify/react';
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
 "name": "Rajeev Ranjan Singh",
  "initials": "DV",
  "url": "https://github.com/rajeever19",
  "location": "Bengaluru, India",
  "locationLink": "https://www.google.com/maps/place/bengaluru",
  "description": "Frontend Engineer | React, Next.js & React Native | Expanding into Full-Stack with NestJS",
  "summary": "I'm a Front-End Developer with 3.7 years of experience specializing in <b>React.js, Next.js, and React Native</b>. I’ve built fast, scalable web and mobile applications for startup environments, where ownership and quick iteration were key.\n I focus on clean UI, responsive design, and performance optimization while also exploring backend technologies like <b>NestJS</b> to strengthen my full-stack capabilities.\nI’m passionate about solving real-world problems through intuitive UX and maintainable code, and I’m eager to contribute to high-impact projects in a collaborative and fast-paced team.",
avatarUrl: "/rajeev.jpeg",
   skills: [
    { title: "React JS", icon: "logos:react" },
    { title: "React Native", icon: "logos:react" },
    { title: "Next.js", icon: "logos:nextjs" },
    {title:'NestJS',icon:'material-icon-theme:nest'},
    { title: "Redux", icon: "logos:redux" },
    { title: "Typescript", icon: "logos:typescript-icon" },
    { title: "Material UI", icon: "logos:material-ui" },
    { title: "JSON", icon: "vscode-icons:file-type-json" },
    { title: "D3.js", icon: "logos:d3" },
    { title: "Axios", icon: "simple-icons:axios" },
    { title: "Node.js", icon: "logos:nodejs-icon" },
    { title: "JavaScript", icon: "logos:javascript" },
    { title: "HTML/CSS", icon: "vscode-icons:file-type-html" },
    { title: "Bootstrap", icon: "logos:bootstrap" },
    { title:'Tailwind CSS',icon:'logos:tailwindcss-icon'},
    {title:'JEST',icon:'logos:jest'},
    {title:'Git',icon:'logos:git-icon'},
    {title:'Postman',icon:'logos:postman-icon'},
    {title:'Docker',icon:'logos:docker-icon'},
    {title:'Jenkins',icon:'skill-icons:jenkins-light'},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rrsrrsrajeev@gmail.com",
    tel: "+918541849528",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajeever19",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajeevranjanse/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rajeev54545",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://github.com/rajeever19",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "rrsrrsrajeev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Must Fintech",
      title: "React JS Developer",
      location: "Bengaluru, India",
      start: "August 2024",
      end: "October 2024",
      logoUrl: "/logos/mustfintech.png",
      description: "Worked on MustMate, an HR management platform, where I led the development of dynamic user interfaces, implemented role-based access control, Slack authentication, and contributed to the core dashboard and member management modules using Next.js, Redux, and Material UI."
    },
    {
      company: "Qilinlab Software PVT. LTD.",
      title: "Senior Frontend Developer",
      logoUrl: "/Qilinlab.png",
      start: "Oct 2021",
      end: "May 2024",
      description: "Built and scaled the VoiceMate platform — a no-code voice-based B2C lead generation dashboard. Designed flow chart editor with React Flow and implemented data-driven dashboards and campaign management features using React.js and Redux."
    },
    {
      company: "Qilinlab Software PVT. LTD.",
      badges: [],
      href: "https://qilinlab.com",
      location: "Bengaluru",
      title: "Frontend Intern",
      logoUrl: "/Qilinlab.png",
      start: "Feb 2021",
      end: "Oct 2021",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },



  ],
  education: [
    {
      school: "Sri Radha Krishna Goenka College, Sitamarhi",
      href: "https://goenkacollege.org/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/buildspace.jpg",
      start: "2016",
      end: "2019",
    },
    {
      school: "Dr. Shaligram Mishra College, Samastipur, India",
      href: "https://www.drsgmcks.com/",
      degree: "I.sc",
      logoUrl: "/waterloo.png",
      start: "2014",
      end: "2016",
    },
    {
      school: "High School Bairgania, Sitamarhi, India",
      href: "",
      degree: "Matriculation (10th)",
      logoUrl: "/laurier.png",
      start: "2012",
      end: "2014",
    },

  ],
  projects: [
    {
      title: "Eduley",
      href: "https://Eduley.com",
      dates: "Jan 2022 - Apr 2025",
      active: true,
      description:
        "Eduley is an all-in-one college operations platform designed to modernize, monetize, and multiply the impact of educational institutions. It simplifies the management of student enrollment, scheduling, financials, communication, learning, and performance tracking — all within a seamless and scalable system.",
      technologies: [
        "React JS",

        "Redux",
        "Typescript",
        "Material UI", "JSON",
        "D3.js", "Axios",
        "JavaScript",
        "HTML/CSS", "Node.js","Jest","Tailwind CSS","Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://Eduley.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/eduley/Eduley-ph.png",
      video:
        "https://www.youtube.com/watch?v=UkOPg93EIK4",
    },
    {
      title: "VoiceMate",
      href: "https://amplify.thevoicemate.com/",
      dates: "Jan 2021 - Feb 2022",
      active: true,
      description:
        "Built a custom dashboard using React.js and a flowchart-based editor to design and manage conversation flows for a B2C voice assistant. Enabled businesses to visually create automated sales and engagement workflows without writing code, powering lead generation through browser-based voice campaigns.",
      technologies: [
        "React JS",
        "Redux",
        "Material UI", "JSON",
        "Axios",
        "JavaScript",
        "HTML/CSS", "Bootstrap","React Flowchart","Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://amplify.thevoicemate.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/voicemate/VoiceMate.png",
      video:
        "https://www.youtube.com/watch?v=UkOPg93EIK4",
    },
    {
      title: "MustMate",
      href: "https://must-mate.ai/",
      dates: "Jul 2024 - Oct 2024",
      active: true,
      description:
        "MustMate is a modern workforce management solution designed to streamline HR operations, optimize productivity, and improve employee engagement. Whether managing remote teams or in-office staff, MustMate provides an intuitive and efficient way to track time, manage payroll, and automate HR processes—all in one place",
      technologies: [
        "React JS",
        "Next.js",
        "Redux",
        "Typescript",
        "Material UI", "JSON",
        "D3.js", "Axios",
         "JavaScript",
        "HTML/CSS", "Bootstrap",

      ],
      links: [
        {
          type: "Website",
          href: "https://must-mate.ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mustmate/home.png",
      video:
        "https://www.youtube.com/watch?v=UkOPg93EIK4",
    },
    {
      title: "SpendTheBits",
      href: "https://spendthebits.com/",
      dates: "Jan 2022 - Jun 2022",
      active: true,
      description:
        "The SpendTheBits Merchant Portal will facilitate payments in Bitcoin to both brick-and-mortar as well as online merchants over the XRP Ledger. Users will be able to send fast and cost-effective payments to merchants.",
      technologies: [
        "React JS",
        "Redux",
        "Typescript",
        "Material UI", "JSON",
        "D3.js", "Axios",
         "JavaScript",
        "HTML/CSS", "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://play.google.com/store/apps/details?id=com.spendthebits.classic_flare&pli=1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Mobile App",
          href: "https://play.google.com/store/apps/details?id=com.spendthebits.classic_flare&pli=1",
          icon: <Icon name="logos:google-play" icon={"logos:google-play"} />,
        },
        
      ],
      image: "/projects/spendthebits/home.png",
      video:
        "https://www.youtube.com/watch?v=UkOPg93EIK4",
    }
  ],
  testimonials: [
  { quote: "Rajeev is an outstanding developer with great attention to detail.", author: "Team Lead at MustFinTech" },
  { quote: "Very creative and collaborative—always delivers top-notch UI!", author: "Team of Qilinlab" },
],

  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "The SpendTheBits Merchant Portal will facilitate payments in Bitcoin to both brick-and-mortar as well as online merchants over the XRP Ledger. Users will be able to send fast and cost-effective payments to merchants.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://cdn.llm.report/openai-demo.mp4",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://cdn.llm.report/openai-demo.mp4",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://www.linkedin.com/in/rajeevranjanse/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://www.linkedin.com/in/rajeevranjanse/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://www.linkedin.com/in/rajeevranjanse/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://www.linkedin.com/in/rajeevranjanse/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://www.linkedin.com/in/rajeevranjanse/",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  
  ],
} as const;
