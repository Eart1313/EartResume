import iconGithub from "../assets/contactIcon/iconGithub.png";
import iconFacebook from "../assets/contactIcon/iconFacebook.png";
import iconEmail from "../assets/contactIcon/iconEmail.png";
import iconPhone from "../assets/contactIcon/iconPhone.png";

export default function ContactMe() {
  return (
    <>
      <div
        id="contact"
        className="flex items-center justify-center text-[2rem] 2xl:text-3xl font-bold mt-[150px] text-secondary">
        Contact Me
      </div>
      <div className="flex flex-wrap items-center justify-evenly py-[100px] ">
        <a href="https://github.com/Eart1313">
          <div className="cursor-pointer bigger">
            <img src={iconGithub} alt="" className="w-[150px] h-[150px] " />
            <div className="text-2xl font-bold  text-[#EA1179] text-center">
              GitHub
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/eart.thepray">
          <div className="cursor-pointer bigger">
            <img src={iconFacebook} alt="" className="w-[150px] h-[150px] " />
            <div className="text-2xl font-bold  text-[#EA1179] text-center">
              Facebook
            </div>
          </div>
        </a>
        <a href="mailto:thepray1313@gmail.com">
          <div className="cursor-pointer bigger">
            <img src={iconEmail} alt="" className="w-w-[150px] h-[150px] " />
            <div className="text-2xl font-bold  text-[#EA1179] text-center">
              Email
            </div>
          </div>
        </a>
        <a href="tel:0988716150">
          <div className="cursor-pointer bigger">
            <img src={iconPhone} alt="" className="w-w-[150px] h-[150px] " />
            <div className="text-2xl font-bold  text-[#EA1179] text-center">
              Phone
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
