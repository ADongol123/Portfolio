/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'Youth Innovation Labs',
    position: 'Software Developer',
    url: 'https://youthinnovationlab.org/',
    startDate: '2022-11-01',
    endDate: '2024-7-01',
    summary: 'YI-Lab’s work is focused on technology development, disaster risk reduction, climate change, open data, entrepreneurship, data driven advocacy, youth engagement, and volunteerism. YI-Lab has a sound expertise in following six thematic sectors: Digital Mapping, Information Management System, Research and Publication, Digital Survey and Mapping, Training and Capacity Development, Governance and Policy.',
    highlights: [
      'Developed real-time data charts and interactive map-based functionalities using ReactJS, enhancing user decision-making and data analysis.',
      'Created custom video players with real-time subtitles, adaptive streaming, and multilingual support, as well as real-time chat and notification systems to improve user engagement.',
      'Focused on responsive design and modern UI/UX best practices to ensure a seamless and engaging user experience across different devices and platforms.',
      'Applied ReactJS, Redux, Mapboxgl, TypeScript, React-Query and other modern technologies to build scalable, high-performance front-end solutions, ensuring robust and maintainable code.',
      'Played a key role in developing and optimizing critical features for platforms like Bipad-Portal, NDRRMA, Shikshya, Tag Me, impacting user interaction, data handling, and overall platform functionality.',
    ],
    projects: [
      {
        title: 'BIPAD PORTAL',
        link: 'https://bipadportal.gov.np/',
      },
      {
        title: 'SHIKSHYA',
        link: 'https://shikshya.org/',
      },
      {
        title: 'MERO KHETI',
        link: 'https://merokheti.org/',
      },
      {
        title: 'NDRRMA',
        link: 'https://ndrrma.yilab.org.np/en/',
      },
      {
        title: 'TAG ME',
        link: 'https://tagme.yilab.org.np',
      },
    ],
  },
  {
    name: 'Themegrills',
    position: 'Associate Software Developer + Internship',
    url: 'https://themegrill.com/',
    startDate: '2022-02-01',
    endDate: '2024-10-01',
    summary: `ThemeGrill is a trusted WordPress company that offers powerful free and premium themes and plugins. The beautiful theme templates and powerful 
    plugins are built with flexibility and ease of use in mind. So, they’re ideal for designing and enhancing modern WordPress websites of any niche effortlessly.`,
    highlights: [
      'Contributed to the Plugin, an LMS system extension, by integrating and optimizing key features to enhance the platform’s functionality',
      'Developed the front-end section using technologies such as React and Typescript, contributing to a dynamic and interactive e-learning platform.',
      'Led the development of the quiz section, enhancing user engagement through interactive and responsive design',
      'Created a custom text editor that provides a rich and flexible content creation experience for users',
    ],
    projects: [
      {
        title: 'MASTERIO',
        link: 'https://masteriyo.com/',
      },
    ],
  },
  {
    name: 'GrowByData',
    position: 'Data Cloud Internship',
    url: 'https://growbydata.com/',
    startDate: '2017-11-1',
    endDate: '2021-12-1',
    summary: `GBD has embraced a data-driven mission that has added sustainable value to our clients, colleagues, and the community.
              Our relentless focus on enabeling sustainable client growth and competitive advantage has led us to assemble and cultivate a melting pot of top talent and top ideas from around the world,
              connecting us to a diverse group of communities and making corporate social responsibility part of our DNA since day 1.`,
    highlights: [
      'Worked in Data Migration',
      'Data Quality Assurance',
      'Template Mapping',
    ],
    projects: [],

  },
  {
    name: 'Clinic One',
    position: 'Content Writer + Data Entry',
    url: 'https://clinicone.com.np/',
    startDate: '2020-05-01',
    endDate: '2021-08-01',
    summary: `We are Kathmandu’s Leading Preventative Clinic committed to providing the highest quality patient care. We treat patients of all ages emphasizing preventive medicine and wellness. 
              Our state of art facility engages skillful medical professionals who use latest equipment to provide quality patient care in the clinic or in the comfort of your home.`,
    highlights: [
      'Worked on writing content about different diseases vaccines for the website',
      'Worked on analysing the data of the patients and adding it in the system',
    ],
  },
];

export default work;
