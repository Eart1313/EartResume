import courseflow from "../assets/projectpics/courseflow.gif";
import eartblog from "../assets/projectpics/eartblog.gif";
import eatraidee from "../assets/projectpics/eatraidee.gif";
import todolist from "../assets/projectpics/todolist.gif";
import submongkol from "../assets/projectpics/submongkol.gif";

const projects = [
  {
    img: courseflow,
    name: "Courseflow",
    desc: `<ul className="list-disc">
    <p>
      This is my final project in bootcamp. CourseFlow is an online
      learning and teaching platform that empowers users to create
      profiles, subscribe to courses, and efficiently manage their own
      course offerings.
    </p>
    <li>
      React for client-side interaction (Frontend) and Node.js for
      server-side rendering (Backend).
    </li>
    <li>
      Supabase for database and authentication, along with Mui for some
      instant components.
    </li>
    <li>
      We use agile and scrum methodologies to work as a team and assist
      each other when we encounter obstacles.
    </li>
    <li>
    <span classname="text-[#EA1179] font-bold">In this project, we faced several challenges, for instance, we had
    some conflicts within the team, but we resolved them by setting
    norms, which effectively fixed the issues.</span>
      
    </li>
  </ul>`,
    link: "https://courseflow-eta.vercel.app",
  },
  {
    img: eartblog,
    name: "Eartblog",
    desc: `<ul className="list-disc">
    <p>
    Eartblog is a website that allows visitors to read posts, sign up for membership, post, delete, and edit posts. It also features an image upload system and authentication system.
    </p>
    <li>
      React for client-side interaction (Frontend) and Node.js for
      server-side rendering (Backend).
    </li>
    <li>
    Using MySQL ( Planetscale ) for the database management and JWT tokens for securing the authentication process.
    </li>
    <li>
    Storing post pictures on Cloudinary and deploying both frontend and backend on Vercel.
    </li>
    <li>
    <span classname="text-[#EA1179] font-bold">
    I encountered a challenge while attempting to save and manage user-provided post information for display on my website. Since the information included HTML tags, it was essential to ensure safety by converting them appropriately.</span>
    </li>
  </ul>`,
    link: "https://eart-blog-frontend.vercel.app/",
  },
  {
    img: eatraidee,
    name: "กินไรดีนะ?",
    desc: `<p>
    กินไรดีนะ? is a website I made. It helps when you don't know what to cook or eat. My grandma often cooks the same food. So, I made this site. It helps choose different meals each day.
    </p>
    <ul className="list-disc">
    <li>
    React for client-side interaction
    </li>
    <li>
    As users do not have the option to add or edit data, the information is stored directly within the project.
    </li>
    <li>
    I use Procreate and Photoshop to create a little panda mascot for my website.    </li>
    <li>
    <span classname="text-[#EA1179] font-bold">
   I learned a great deal about randomizing and managing numbers, as well as how to implement sound on my website.</span>
    </li>
    </ul>`,
    link: "https://eatraidee-o99s-ql9c77llk-eart1313.vercel.app/",
  },
  {
    img: todolist,
    name: "To-do list 📝",
    desc: `<p>
    Todolist is a website that can be used to record a list of daily tasks that you need to accomplish.
    </p>
    <ul className="list-disc">
    <li>
    Users can comprehensively use it to read, add, delete, and update their data.
    </li>
    <li>
    React for client-side interaction
    </li>
   
    <li>
    This website does not handle a large amount of data, so I can simply use the user's local storage to store their data. This approach offers the advantage of quick data access and reduced server load. </li>
    <li>
    <span classname="text-[#EA1179] font-bold">
    It's a simple yet powerful website for me; I have learned a lot about creating CRUD operations and managing user data.</span>
    </li>
    </ul>`,
    link: "https://to-do-list-kappa-virid.vercel.app/",
  },
  {
    img: submongkol,
    name: "Submongkol",
    desc: `<p>
    Submongkol is a website for a money rental service for weddings. It's a static website that contains all essential information a customer needs. The benefit of this static design is its reliability and speed, providing users with quick access to vital information without the need for complex functionalities.
    </p>
    <ul className="list-disc">
    <li>
    Users can directly email or send messages to my email through my website. This feature enhances user convenience, providing an easy and direct line of communication for inquiries and support
    </li>
    <li>
    The website features a responsive design, ensuring seamless functionality on any platform
    </li>
   
    <li>
    Wordpress for client-side interaction </li>
    <li>
    <span classname="text-[#EA1179] font-bold">
    This is the first website that I created, and it has sparked my passion for building things like websites. </span>
    </li>
    </ul>`,
    link: "https://submongkol.com/",
  },
];

export default projects;
