/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Mithun Adhikari',
  title: "Hi there, I'm Mithun",
  subTitle: [
    {
      title: emoji(
        '🚀 Entrepreneur, Co-Founder at Spyro Infosys.'
      ),
    },
    {
      title: emoji(
        '🚀 Flutter Instructor at Broadway Infosys.'
      ),
    },
    {
      title: emoji(
        '🚀 A passionate Full Stack Software Developer having experience in building-'
      ),
      items: [
        emoji(
          '1• Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Flutter / Android and some other cool libraries and frameworks.'
        ),
        emoji(
          '2• Cloud solutions with GCP, Azure, and DigitalOcean.'
        ),
        emoji(
          '3• Database Solutions with MSSQL, Oracle, MySQL, and MongoDB.'
        )
      ]
    }
  ],
  resumeLink:
    'https://drive.google.com/file/d/1WAP66YqE_PCGN0Z660EUtLriIT-_m109/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/mithunadhikari40',
  linkedin: 'https://www.linkedin.com/in/adhikari-mithun-570474119/',
  gmail: 'mithunadhikari40@gmail.com',
  facebook: 'https://www.facebook.com/adhikari.mithun.3/',
  medium: 'https://mithunadhikari.medium.com/',
  stackoverflow: 'https://stackoverflow.com/users/6745813/mithun-adhikari',
  Instagram: "https://www.instagram.com/adhikari_mithun/",
  twitter: "https://twitter.com/real_mithun",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: emoji(
    '🚀 Enterprenour/ IT Instructor/ Software Engineer, who wants to help people make their life easier'
  ),
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end/ Back end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Teach Morden Tech Stack to help you land a job.'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Azure / GCP.'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'flutter',
      fontAwesomeClassname: 'fab fa-flutter',
    },
    {
      skillName: 'android',
      fontAwesomeClassname: 'fab fa-android',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Nepal College Of Information Technology',
      logo: require('./assets/images/ncit_logo.jpg'),
      alt: 'Nepal College of Information Technology',
      subHeader: 'Bachelor in Software Engineering.',
      duration: 'OCt 2014 - Oct 2018',
      // desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'I got a 4-year full scholarship.',
        'I scored 4 GPA in the 8th Semester',
        'I was Class topper/Second topper on multiple occasions.',
      ],
    },
    // {
    //   schoolName: 'Stanford University',
    //   logo: require('./assets/images/stanfordLogo.png'),
    //   subHeader: 'Bachelor of Science in Computer Science',
    //   duration: 'September 2013 - April 2017',
    //   desc:
    //     'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
    //   descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    // },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Co-Founder',
      company: 'Spyro Infosys Pvt. Ltd.',
      companylogo: require('./assets/images/spyro_logo.jpg'),
      alt:'Spryo Infosys Pvt. Ltd.',
      date: 'Feb 2020 – Present',
      desc:
        `Leading IT Training Institute/ Software Development Company Focused on transforming
         today's students into tomorrow's professionals.`,
      descBullets: [
        'All kinds of mobile/web/desktop apps.',
        'All kinds of Database Solutions.',
        'All kinds of Cloud Solutions.',
        'Social Media Promotion and Boosting.',
        'All kinds of designing work.',
        'Training on Mobile and Web app design and development.',
        'Training on Artificial Intelligence, Machine learning.',
        'Training on Cloud and Database Solutions.',
        'Training on Graphics Design.',
        'Training on SEO Managements.',
        'Training on Process Automation.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Microsoft Innovation Center, Nepal',
      companylogo: require('./assets/images/unlimited_logo.png'),
      alt: 'Microsoft Innovation Center, Nepal',
      date: 'Aug 2017 – Feb 2020',
      desc: 'Leading Software Development Company Focused on Machine Learning, Artificial Intelligence, Big Data, NLP (Natural Language Processing), Mobile Application, Web Application, Cloud solutions, Database Solution.',
    },
    {
      role: 'Flutter Instructor',
      company: 'Broadway Infosys',
      companylogo: require('./assets/images/broadway_logo.jpg'),
      alt:'Broadway Infosys Pvt. Ltd',
      date: 'Nov 2018 – present',
      desc:
        'Broadway Infosys Nepal is one of the best inclusive computer training institutes in Kathmandu, Nepal.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'mithunadhikari40', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },
    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// what I am proud of section
const proudOfSection = {
  title: emoji('What I am proud of 🏆 '),
  subtitle:
    'Something I have done, or something I have been a part of which helped people make their life easier.',

  proudCard: [
    {
      title: 'Reconstruction Information Management System',
      subtitle:
        `RIMS was used to mobilize, visualize, and manage data of 26,912 houses in Gorkha,
          which were damaged by the Earthquake of 2015. UNDP Nepal, 
          helped those households to rebuild their houses. 
          I feel proud to be a member of the team that developed, 
          maintained, and mobilized the system, 
          which helped 26,912 households to rebuild their houses.
          The project implemented is known as Gorkha Housing Reconstruction Project (GHRP)`,
      image: require('./assets/images/rims_house.jpg'),
      alt: "Reconstuction in Gorkha after the earthquake.",
      footerLink: [
        {
          name: 'Report',
          url:
            'https://www.np.undp.org/content/nepal/en/home/projects/GHRP.html',
        },
        {
          name: 'Facebook',
          url:
            'https://www.facebook.com/ODRCUNDP/',
        },
        {
          name: 'Status',
          url:
            'https://www.np.undp.org/content/nepal/en/home/projects/GHRP-FAQ.html',
        },
      ],
    },
    {
      title: 'Post-Flood Recovery Management System',
      subtitle:
        `The Post-Flood Recovery management system was used to mobilize, visualize, and manage data of over 31,800 houses in Sunsari, Saptari, Sarlahi, Dhanusha, Mahottari, Rautahat, and Parsa districts, which were damaged by the Flood of 2017. The project was funded by China and implemented by UNDP through which at the field level collaborated with newly elected governments in carrying out the distribution of a package of non-food items, which includes shawls, blankets, cooking utensils, and many more.`,
      image: require('./assets/images/post_flood.jpg'),
      alt: "Post Flood Recovery Program in Sarlahi",
      footerLink: [
        {
          name: 'See more',
          url:
            'https://www.np.undp.org/content/nepal/en/home/presscenter/pressreleases/2018/China-UNDP-partnership-for-post-flood-recovery-in-Terai.html',
        },
      ],
    },
    {
      title: 'Golden 1000 days',
      subtitle: `G1K was used to carry out the training, information management,
       and awareness program. The Government of Nepal, the European Union,
        and UNICEF launched the national “Golden 1000 days Public Awareness Campaign”. 
        Led by the National Planning Commission (NPC), the campaign aims to 
        raise awareness of the unique window of opportunity between a women’s pregnancy
         and her child’s second birthday, to shape a healthier and more prosperous
          future. G1K also aimed at going completely digital.`,
      image: require('./assets/images/g1k_pic.png'),
      alt: "Golden 1000 days brand ambassador, Paras Khadka, Dipak Raj Giri and Dipa Shree Niroula",
      footerLink: [
        { name: 'See more', url: 'https://blogs.worldbank.org/endpovertyinsouthasia/engaging-communities-golden-1000-days-nepal' },
        {
          name: 'See more',
          url: 'https://scalingupnutrition.org/news/a-huge-launch-for-nepals-golden-1000-days-awareness-campaign/',
        },
        {
          name: 'Report',
          url: 'http://scalingupnutrition.org/wp-content/uploads/2016/06/Report-The-Golden-1000-Days-Public-Awareness-Campaign-Promoters-Announcement-Program.pdf',
        },


      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With a Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://mithunadhikari.medium.com/should-you-try-all-the-popular-programming-languages-and-frameworks-721a5989f873',
      title: 'Should you try all the popular programming languages and frameworks?',
      description:
        'A little word of advice for students and people starting to learn to program on how you should and should not start learning.',
    },
    {
      url: 'https://drive.google.com/file/d/1mOUu4Bkm-Y-LkvY1ErkRp4BmgQ7MVeyr/view?usp=sharing',
      title: 'Customizing the BigBlueButton Greenlight Customization',
      description:
        'A comprehensive guide on how to set up BigBlueButton (https://bigbluebutton.org/) on your server. If you\'re trying to create a video conferencing system for your office/school for free, then BBB is your go-to option.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET TO INTERACT WITH PEOPLE.'
  ),

  talks: [
    {
      title: 'Microsoft Build Session!      ',
      subtitle: 'Azure and Database Management Session at Unlimited Technology, Kathmandu',
      event_url: 'https://www.facebook.com/nayna.shakya/posts/10157396490368324',
    },
    {
      title: 'Data mobilization in RIMS',
      subtitle: 'Working with the UNDP Nepal team to enhance the app/web application that helps mobilize data of more than 26912 beneficiaries.UNDP Nepal with the Government of India is providing support to reconstruct earthquake affected houses in Gorkha and Unlimited technology is providing technology solution through the cloud, mobile/web application, data management.',
      event_url: 'https://www.facebook.com/nayna.shakya/posts/10157758860013324',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+977-9847501199',
  emailAddress: 'mithunadhikari40@gmail.com',
  name: 'Mithun Adhikari'
};

// Twitter Section

const twitterDetails = {
  userName: 'real_mithun', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  proudOfSection
};
