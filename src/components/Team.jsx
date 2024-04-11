import Section from "./Section";
import Heading from "./Heading";
import sharethiaResume from "../constants/Sharethia's Resume.pdf";
import barringtonResume from "../constants/Barrington Patterson.pdf";
// import christinaResume from "../assets/Christina_Resume.pdf";
import hughResume from "../constants/Hugh_Scott_Resume.pdf";
// import knight from "../assets/knights/knight1.jpeg";
// import knight2 from "../assets/knights/knight2.jpeg";
// import knight3 from "../assets/knights/knight3.jpeg";
const HughBio =
  "Hugh leads as Team Lead and Compiler Engineer, is entrusted with manifesting the visionary TypeSnake concept. His adeptness in executing intricate compiler architecture reflects profound understanding of cutting-edge technologies. With exceptional leadership and relentless pursuit of excellence, he seeks Hugh innovation and project excellence.";
const SharethiaBio =
  "Sharethia, assumes the pivotal role of a language and grammar architect on TypeSnake. Leveraging her expertise in software design and development, she spearheads the design and implementation of the compiler's language and grammar. Sharethia consistently delivers solutions that push boundaries and drive project success.";
const ChristinaBio =
  "Christina shines as a multifaceted talent, seamlessly blending expertise in UX, UI, and syntax design. Her role encompasses not only crafting visually stunning interfaces but also ensuring intuitive user experiences and elegant syntax structures. With a passion for pushing boundaries, Christina consistently delivers designs that captivate and inspire. ";
const BarringtonBio =
  "Barrington, a top-tier Frontend Engineer, brings the captivating digital landscape to life before your eyes. His precise craftsmanship guarantees flawless frontend implementation. With expertise in cutting-edge technologies and an eye for detail, Barrington consistently delivers exceptional user experiences.";
const TeamCard = (props) => {
  const jobTitle = props.jobTitle;
  const name = props.name;
  const id = props.id;
  const bio = props.bio;
  const documentName = props.documentName;
  const document = props.document;

  return (
    <div className="p-6 rounded-[1.1rem] bg-gradient-to-r from-transparent to-transparent border-2 border-conic-gradient flex flex-col justify-between">
      <div>
        <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          {jobTitle}
        </h2>
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">
          {name}
        </h1>
        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
          {bio}
        </p>
      </div>

      <div className=" pt-auto flex w-full flex-row justify-between">
        <div className="flex-grow w-3/5 ">
          <a
            href="#"
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            {"ID:"} {id} {"  "}
          </a>
        </div>
        <small className="w-2/5 flex-row-reverse inline-flex items-center mt-4">
          <a
            href={document}
            download={documentName}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-300"
          >
            Resume and Contact Info
          </a>
        </small>
        {/* <div className="flex-auto flex justify-center w-2/5 "> */}
        {/* </div> */}
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <Section id="team">
      <Heading tag="Team" title="Meet the Team" />

      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          <TeamCard
            jobTitle="Team Lead & Compiler Engineer"
            name="Hugh Scott"
            id="1908850"
            bio={HughBio}
            document={hughResume}
            documentName="Hugh Scott's Resume"
          />
          <TeamCard
            jobTitle="Frontend Engineer"
            name="Barrington Patterson"
            id="2008034"
            bio={BarringtonBio}
            documentName="Barrington Patterson's Resume"
            document={barringtonResume}
          />
          <TeamCard
            className="text-pretty"
            jobTitle="Language & Grammer Architect"
            name="Sharethia McCarthy"
            id="2000191"
            // bio="An aspiring software developer Sharethia is a language and grammar architect on TypeSnake. She is responsible for the design and implementation of the language and grammar of the compiler by leveraging a fresh perspective in software design and development, with a knack for innovative problem-solving."
            bio={SharethiaBio}
            document={sharethiaResume}
            documentName="Sharethia McCarthy's Resume"
          />

          <TeamCard
            jobTitle="UX, UI & Syntax Designer"
            name="Christina Wilson"
            id="1903419"
            bio={ChristinaBio}
            documentName="Christina Wilson's Resume"
          />
        </div>
      </div>
    </Section>
  );
};

export default Teams;
