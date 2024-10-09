
import images from './images';

const projectCardInfoList = [
  {
    projectName: 'Project Alpha',
    className: 'CSC 350',
    description: "Project Alpha focuses on building a scalable backend service designed to handle large datasets in real-time. It leverages cloud infrastructure to ensure high availability and data redundancy. The primary goal is to develop a service that is both cost-efficient and capable of handling thousands of concurrent requests, making it ideal for enterprise-level applications.",
    technologiesUsed: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'React', 'GraphQL', 'Redis', 'Nginx', 'Webpack', 'TypeScript'],
    projectTimeline: {
      startDate: 'Jan 2022',
      endDate: 'Aug 2023',
    },
    galleryImages: [images.image1, images.image2, images.image3, images.image4],
    githubLink: 'https://github.com/example/projectAlpha',
    categories: ['Backend Development', 'Cloud Computing'],
  },
  {
    projectName: 'Project Beta',
    className: 'CSC 450',
    description: "This project focuses on creating a mobile application that integrates advanced AI algorithms for predictive analytics. It aims to offer users personalized insights based on their interaction history and data patterns. The app is designed with a user-friendly interface and supports seamless integration with wearable devices for real-time data tracking.",
    technologiesUsed: ['React Native', 'TensorFlow', 'Python', 'SQLite', 'REST API', 'AWS Lambda'],
    projectTimeline: {
      startDate: 'Mar 2023',
      endDate: 'Dec 2024',
    },
    galleryImages: [images.image1, images.image2, images.image3, images.image4],
    githubLink: 'https://github.com/example/projectBeta',
    categories: ['Mobile App Development', 'AI & Machine Learning'],
  },
  {
    projectName: 'Project Gamma',
    className: 'CSC 210',
    description: "Project Gamma involves designing a data visualization tool aimed at simplifying complex datasets into easily digestible graphs and charts. This web-based application caters to professionals in finance and marketing, offering customizable dashboards and a variety of data import/export options.",
    technologiesUsed: ['D3.js'],
    projectTimeline: {
      startDate: 'Jun 2023',
      endDate: 'Nov 2024',
    },
    galleryImages: [images.image1, images.image2, images.image3, images.image4],
    githubLink: 'https://github.com/example/projectGamma',
    categories: ['Data Visualization', 'Web Development'],
  },
  {
    projectName: 'Project Delta',
    className: 'CSC 470',
    description: "Project Delta is focused on creating a blockchain-based application that aims to enhance security and transparency in digital transactions. The project's core involves implementing smart contracts that automate processes and reduce the need for intermediaries in financial operations.",
    technologiesUsed: ['Solidity', 'Ethereum', 'Web3.js', 'MetaMask'],
    projectTimeline: {
      startDate: 'Feb 2023',
      endDate: 'Sep 2024',
    },
    galleryImages: [images.image1, images.image2, images.image3, images.image4],
    githubLink: 'https://github.com/example/projectDelta',
    categories: ['Blockchain', 'Cryptocurrency'],
  },
  {
    projectName: 'Project Epsilon',
    className: 'CSC 320',
    description: "Project Epsilon aims to develop a comprehensive e-commerce platform that includes features such as inventory management, payment gateway integration, and order tracking. The project focuses on optimizing the user experience by employing modern design principles and ensuring compatibility with multiple payment methods.",
    technologiesUsed: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    projectTimeline: {
      startDate: 'Apr 2023',
      endDate: 'Dec 2024',
    },
    galleryImages: [images.image1, images.image2, images.image3, images.image4],
    githubLink: 'https://github.com/example/projectEpsilon',
    categories: ['E-commerce', 'Full-Stack Development'],
  },
];

export default projectCardInfoList;