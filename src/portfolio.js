import travelAdmin from './travel/admin.png'
import travelForm1 from './travel/form1.png'
import travelForm2 from './travel/form2.png'
import travelHome from './travel/home.png'
import travelIndex from './travel/index.png'
import travelLogin from './travel/login.png'
import teacherIndex from './teacher app/index.png'
import teacherLogin from './teacher app/login.png'
import hawkeyeAdminIndex from './hawkeye/admin_index.png'
import hawkeyeWelcome from './hawkeye/welcome.png'
import hawkeyeNannyIndex from './hawkeye/index_nanny.png'
import bankLogin from './bank account confirm/login.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hieunguyen0802.github.io/',
  title: 'Hieu Nguyen',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hieu Nguyen',
  role: '#live #laugh #love',
  quote: '"live the life you love and love the life you lived"',
  description:
    "Ola, My name is Hieu but you can me \"Híu\", it 'd make our conversation easier to go on. A sneak peek about myself, I was born and raised in HCMC. So yes ! I am a real Saigonese even though my voice is northern ascent. I studied abroad when I was 15 years old, had my Junior and Senior year at a private high school, located in Mission Hills, LA. I then moved to Dallas-Fort Worth Metropolitan area where I spent 1.5 years in a community college, before receiving a full scholarship at Texas Christian University. My undergrad program at TCU was mainly focus on Computer Science and Mathematics. I graduated on May 2020, with a Bachelor of Arts in Mathematics, Minor in Computer Science. Being a global citizen, you may recall that there was a huge surge of Covid-19 over the world at that time and it did not take America so long to climb to the top of most infected countries. I was reluctantly to farewell and leave my 7 years in the States behind. Such a marvelous journey I'd had. It was one of the most beautiful time and memories that I'd ever had in my life, and I still miss it even now. As life goes on, I shifted my career back to home, started with a Business Application Developer at Vietnam Australian Int'l School.   ",
  info: "I am a family, introvert, analytical and methodical, and obviously a left-brained person. My religion is Roman Catholic and I often practice. My top three priorities are religion, my love and family. I have love for children and patience to endure hardships. When I was four, I learnt to play piano and I've been playing for roughly over 20 years. That's what I'd do when I get stressed. Sports, in particularly, soccer and volleyball are my most two favorites. I also do running and swimming, hiking, snowboarding. It was blessed that I have a certain friendships and a number of friends. Hanging out and playing computer games in order to catch up and keep memories with them. That pretty much sums up my one fourth of the century life.",
  resume:
    'https://github.com/hieunguyen0802/my-web/raw/main/public/HieuNguyen_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/hieunguyen0802/',
    github: 'https://github.com',
  },
}

const experiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Business Application Developer',
    description:
      'My responsibilities are to develop web app and support users. I write web application apps for internal use between departments within the company. The apps are designated to serve a wide range of users, from 2K - up to 10K. Sometimes I play multiple roles, being a Business Analyst, or even Project Manager for mid-size scope projects.',
    stack: ["Vietnam Australian Int'l School", 'Nov 2020 - Present'],
    sourceCode: 'https://github.com',
    livePreview: 'https://employee.vas.edu.vn/',
  },
  {
    name: 'Tandy Lab Assistant',
    description:
      "A job where I learnt to maintain devices and equipments. My main job was staying in the lab most of the time to instruct students on how-to things. Our team always got to use and try new technology, both hardware and software. I'd got a chance to install and experience those.",
    stack: ['Neeley Information Technology', 'August 2017 - May 2020'],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.neeley.tcu.edu/labs/',
  },
  {
    name: 'Teaching Assistant',
    description:
      "During my sophomore year in the college, I had a job where I was in assistance with professors to tutor and grade students' works. I'd sharpened my teaching methods and math skills through this opportunity. I spend almost my time in strengthening student' knowledge, then prepare lectures, lesson material to improve their Math skills.  ",
    stack: ['Department of Mathematics', 'August 2017 - August 2019'],
    sourceCode: 'https://github.com',
    livePreview: 'https://cse.tcu.edu/mathematics/index.php',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Hawkeye Attendance System',
    description: [
      'An internal app used by around 500 users, for both staffs and employees',
      'Authorization and Authentication',
      'Integrated with AI Camera to detect and recognize students face (~2000k faces)',
      'Perform check in / out for students',
      'Able to view attendance according to user role',
      'Dashboard and basic CRUD features on admin page for reports, users, config managements',
    ],
    imgs: [ { img: hawkeyeWelcome }, {img: hawkeyeAdminIndex },  { img: hawkeyeNannyIndex }],
  },
  {
    name: 'Travel - Covid 19 Incidents Declaration Form',
    description: [
      'An internal app used by around 2000 users, for both staffs and employees.',
      'Authorization and Authentication',
      'Basic CRUD features on form declaration',
      'Able to view/ approve/ decline requests according to their roles',
      'Dashboard admin page for reports, users, config managements',
    ],
    imgs: [  { img: travelIndex }, { img: travelHome }, {img: travelAdmin }, { img: travelForm1 }, { img: travelForm2 }, { img: travelLogin }],

  },
  {
    name: 'Teacher Handbook & Parent Confirmation',
    description: [
      'An app for teacher to confirm that they have read documents.',
      'Integrated with O365 to retrieve user data',
      'Confirmed data then stored to Sharepoint Online.',
      'Use Power Automate to design and develop.',
    ],
    imgs: [ {img: teacherIndex }, { img: teacherLogin }],

  },
  {
    name: 'Bank Account Confirmation',
    description: [
      'An external app used by around 2000 users, for Finance Dept. and parents/ guardians to use.',
      'A basic form used for confirming parent bank account when having refund from the school.',
    ],
    imgs: [ {img: bankLogin }],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML - CSS - Javascript',
  'Jquery - JSON - API',
  'C# - .NET',
  'Bootstrap - React',
  'Azure - AWS',
  'Git - Bitbucket',
  'Dependency Injection',
  'Design Pattern - MVC',
  'Algorithms',
  'Data Structure',
  'MSSQL - RDMS',
  'Power BI - Power Automate',
]

const softSkill = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'opened-mind',
  'adaptive',
  'fast learner',
  'patient',
  'listening',
  'thoughtful',
  'details-oriented',
  'responsibilities',
  'determined',
  'organized',
  'dedicated',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hieu.h.t.nguyen@tcu.edu',
}

export { header, about, experiences, projects, skills, softSkill, contact }
