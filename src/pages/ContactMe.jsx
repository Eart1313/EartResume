import iconGithub from "../assets/contactIcon/iconGithub.png";
import iconFacebook from "../assets/contactIcon/iconFacebook.png";
import iconEmail from "../assets/contactIcon/iconEmail.png";
import iconPhone from "../assets/contactIcon/iconPhone.png";
import footer from "../assets/footer.png";

export default function ContactMe() {
  return (
    <>
      <div
        id="contact"
        className="flex items-center justify-center text-5xl font-bold mt-[120px] p-[50px] text-secondary">
        Contact Me
      </div>
      <div className="flex items-center justify-evenly py-[100px]">
        <div>
          <img src={iconGithub} alt="" className="w-[200px] h-[200px]" />
          <div className="text-2xl font-bold  text-[#EA1179] text-center">
            GitHub
          </div>
        </div>
        <div>
          <img src={iconFacebook} alt="" className="w-[200px] h-[200px]" />
          <div className="text-2xl font-bold  text-[#EA1179] text-center">
            Facebook
          </div>
        </div>
        <div>
          <img src={iconEmail} alt="" className="w-[200px] h-[200px]" />
          <div className="text-2xl font-bold  text-[#EA1179] text-center">
            Email
          </div>
        </div>
        <div>
          <img src={iconPhone} alt="" className="w-[200px] h-[200px]" />
          <div className="text-2xl font-bold  text-[#EA1179] text-center">
            Phone
          </div>
        </div>
      </div>

      <img
        src={footer}
        alt="footer "
        className="object-fill w-[100%] h-[250px]"
      />
    </>
  );
}
