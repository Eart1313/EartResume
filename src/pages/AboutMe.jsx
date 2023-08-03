import developer from "../assets/developer.png";

export default function AboutMe() {
  return (
    <>
      <div
        id="About"
        className="flex items-center justify-center text-5xl font-bold mt-[150px] mb-[30px] p-[50px] text-secondary">
        About
      </div>
      <div className="flex items-center justify-center  text-[#fff]">
        <div className="flex justify-evenly  w-[70%] h-[80%] bg-primary rounded-[50px] p-[30px] ">
          <div>
            <div className="text-lg">
              <h2 className="text-3xl font-bold my-3">Skills</h2>
              <div className="text-xl font-bold m-5 ">Technical skills</div>
              <ol className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Git/Github</li>
                <li>MongoDB</li>
                <li>Photoshop / Canva</li>
              </ol>

              <div className="text-xl font-bold m-5">Soft skills</div>
              <ul className="list-disc">
                <li>English ( Intermediate level )</li>
                <li>Team work</li>
                <li>Problem Solving</li>
                <li>Communication Skills</li>
                <li>Requesting Assistance</li>
                <li>Scrum</li>
                <li>Agile </li>
              </ul>
            </div>
            <div className="text-lg">
              <h2 className="text-3xl font-bold mt-[50px] mb-[20px]">
                Education
              </h2>
              <ul className="list-disc">
                <li>
                  <div>2013-2017</div>
                  <div>Saimit Suksa School</div>
                  <div>GPA: 2.98</div>
                </li>
                <li className="my-[20px]">
                  <div>2019-Present</div>
                  <div>Ramkhamhaeng University</div>
                  <div> B.A (Mass Communication)</div>
                  <div>GPA: 2.71</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-lg  text-center w-[50%]">
            <div className="flex- items-center justify-center">
              <h2 className="text-3xl font-bold m-3 ">About me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quia debitis consequuntur quas possimus vitae.
                Molestias quo eum fugit sed id assumenda in dolore,
                exercitationem libero vero optio corrupti neque.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-[50px] mb-[20px]">
                Experience
              </h2>
              <div className="my-[50px]">
                <div className="text-2xl font-bold mt">2018-2020</div>
                <div>NH Herbs | Sales representative</div>
                <div className="text-sm">
                  - drive revenue growth through effective communication and
                  relationship building.
                </div>
              </div>
              <div className="my-[50px]">
                <div className="text-2xl font-bold mt">2020-2022</div>
                <div>BAANSINSODSUPMONGKOL CO., LTD. | Sales representative</div>
                <div className="text-sm">
                  - delivering exceptional support and fostering positive
                  customer experiences.
                </div>
              </div>
              <div className="my-[50px]">
                <div className="text-2xl font-bold mt">2022-2023</div>
                <div>More Than Love | Graphic Designer </div>
                <div className="text-sm">
                  - craft visually captivating designs that effectively
                  communicate messages and enhance brand identities.
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold m-3 mt-[50px] mb-[20px]">
                Certification
              </h2>
              <div>- TechUp Full stack developer Bootcamp.</div>
              <div className="flex items-center justify-center py-[80px]">
                <img src={developer} alt="developer" className="h-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
