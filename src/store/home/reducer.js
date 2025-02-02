const initialState = {
  loading: false,
  xp: "",
  aboutText: `I am a seasoned software developer with over timestamp of experience in software development, specializing in web-based app development using technologies such as ReactJS, Redux, Material UI, Node.js, D3, npm, Firebase, Firestore, Bootstrap 4, and Context. My expertise spans various domains, including finance, telecom, social apps, HRM, property apps, and B2C app interactions for Verizon. I have a strong command of Git, Webpack 5, Babel, React Router v6, and have worked on Pipeline Groovy scripts and Docker deployment strategies. Additionally, I am well-versed in technologies like Node.js, MongoDB, Express.js, Next.js, React Native, and PWAs. My skills include testing methodologies using Jest, Enzyme, and Cypress, with a focus on developing secure and stable applications. I am dedicated for producing reusable and maintainable code.`,
  mediumId: "@prateekjena7733",
  blogLoading: true,
  blogs: [],
  currentYear: new Date().getFullYear(),
  socialIds: [
    {
      name: "stack-overflow",
      link: "https://stackoverflow.com/users/8932033/warmachine",
    },
    {
      name: "medium",
      link: "https://medium.com/@prateekjena7733",
    },
  ],

  career: {
    work: [
      {
        name: "Launch by NTT Data",
        duration: "feb'24 - Present",
        jDate: "19/02/2024",
        rDate: "",
        description: "Digital Engineering Lead Engineer",
      },
      {
        name: "Development Bank of Singapore",
        duration: "May'22 - Jan'24",
        jDate: "25/05/2022",
        rDate: "25/01/2024",
        description: "Associate",
      },
      {
        name: "Cognizant",
        duration: "Jul'20 - Mar'22",
        jDate: "14/07/2020",
        rDate: "01/04/2022",
        description: "Associate Projects",
      },
      {
        name: "Sparity",
        duration: "Jul'19 - May'20",
        jDate: "03/07/2019",
        rDate: "06/05/2020",
        description: "Software Developer",
      },
      // {
      //   name: "Freelancing",
      //   duration: "Dec'18 - May'19",
      //   jDate: '25/12/2018',
      //   rDate: '21/06/2019',
      //   description: "Software Developer",
      // },
      {
        name: "PeopleLink Unified Communications Pvt. Ltd.",
        duration: "Sept'17 - Nov'18",
        jDate: "04/09/2017",
        rDate: "06/11/2018",
        description: "Software Developer",
      },
    ],
    edu: [
      {
        name: "G.C.E,keonjhar",
        duration: "2012 - 2016",
        description: "Mechanical Engineering (7.3 cgpa)",
      },
      {
        name: "B.C.S.T,Bhuabenswar",
        duration: "2010 - 2012",
        description: "Science (80% )",
      },

      {
        name: "M.P.C High School,Betnoti",
        duration: "2008 - 2010",
        description: "88%",
      },
      {
        name: "S.A.I.E.C,Betnoti",
        duration: "2000 - 2008",
        description: "",
      },
    ],
  },
};
export const home = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_BLOG_LOADING":
      return { ...state, blogLoading: action.data };
    case "STORE_BLOGS":
      return { ...state, blogs: action.data };
    case "XP_UPDATE":
      return { ...state, xp: action.data, aboutText: state.aboutText.replace('timestamp', action.data)}  
    default:
      return state;
  }
};
