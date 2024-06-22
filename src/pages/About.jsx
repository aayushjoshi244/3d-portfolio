import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Aayush
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Currently pursuing a Bachelor of Technology in Artificial Intelligence
          at B K Birla Institute of Engineering & Technology. With a robust
          foundation in full stack development, I specialize in the MERN stack
          (MongoDB, Express, React, and Node.js) and also excel as a Python
          developer. My academic and personal interests extend to Artificial
          Intelligence and Chip Designing, areas where I am eager to innovate
          and expand my knowledge. Committed to lifelong learning, I
          continuously seek opportunities to acquire new skills and embrace
          cutting-edge technologies in the dynamic field of technology and
          engineering.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 ">
              <div className="btn-black rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center item-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <div>
            <p className="font-bold text-blue-500">
              Student Coordinator and Graphic Designer
            </p>
            <p className="font-bold text-blue-500">
              Training and Placement Cell
            </p>
            Oversaw and coordinated placement activities, enhancing
            communication and organization between students and potential
            employers. Developed and designed promotional materials for campus
            placement sessions, contributing to effective visual communication
            strategies.
            <br />
            <br />
            <p className="font-bold text-blue-500">Freelance Developer</p>
            Specialized in developing applications and tools using the MERN
            stack and Python, delivering enhanced functionality and user
            experience across multiple freelance projects.
            <br />
            <br />
            <p className="font-bold text-blue-500">Professional Interests</p>
            Passionate about Artificial Intelligence, continuously exploring
            ways to integrate AI technologies with development projects to
            innovate and improve methodologies.
          </div>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default About;
