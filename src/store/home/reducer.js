const initialState = {
  loading: false,
  mediumId: "@prateekjena7733",
  blogLoading: true,
  blogs: [],
  currentYear:new Date().getFullYear(),
  socialIds: [
    {
      name: "stack-overflow",
      link: "https://stackoverflow.com/users/8932033/warmachine",
    },
    {
      name: "medium",
      link: "https://medium.com/@prateekjena7733",
    }
  ],

  career: {
    work: [
      {
        name: "Cognizant",
        duration: "Jul'20 - Present",
        description: "Associate Projects",
      },
      {
        name: "Sparity",
        duration: "Jul'19 - May'20",
        description: "Software Developer",
      },
      {
        name: "Stealth Mode Startup",
        duration: "Dec'18 - May'19",
        description: "Software Developer",
      },
      {
        name: "PeopleLink Unified Communications Pvt. Ltd.",
        duration: "Sept'17 - Nov'18",
        description: "Software Developer",
      },
    ],
    edu: [
      {
        name: "G.C.E,keonjhar",
        duration: "2012 - 2016",
        description: "Mechanical Engineering",
      },
      {
        name: "B.C.S.T,Bhuabenswar",
        duration: "2010 - 2012",
        description: "Science",
      },

      {
        name: "M.P.C High School,Betnoti",
        duration: "2008 - 2010",
        description: "",
      },
      {
        name: "S.A.I.E.C,Betnoti",
        duration: "2000 - 2008",
        description: "",
      },
    ],
  },
  particleStyle: [
    {
      particles: {
        number: {
          value: 150,
        },
        size: {
          value: 1,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    },
    {
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 1,
          direction: "top",
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 4,
          },
        },
      },
    },
    {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.04,
        },
        move: {
          random: true,
          speed: 1,
          direction: "top",
          out_mode: "out",
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.07,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            particles_nb: 10,
          },
        },
      },
      retina_detect: true,
    },
  ],
};
export const home = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_BLOG_LOADING":
      return { ...state, blogLoading: action.data };
    case "STORE_BLOGS":
      return { ...state, blogs: action.data };
    default:
      return state;
  }
};
