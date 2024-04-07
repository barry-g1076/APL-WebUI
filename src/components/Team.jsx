import Section from "./Section";
import Heading from "./Heading";
// import knight from "../assets/knights/knight1.jpeg";
import knight2 from "../assets/knights/knight2.jpeg";
// import knight3 from "../assets/knights/knight3.jpeg";

const TeamCard = (props) => {
  const jobTitle = props.jobTitle;
  const name = props.name;
  const id = props.id;
  return (
    <div className="p-6 rounded-[1.1rem] bg-gradient-to-r from-transparent to-transparent border-2 border-conic-gradient">
      {/* <img
        className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
        src={knight2}
        alt="blog"
      /> */}
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
        {jobTitle}
      </h2>
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">
        {name}
      </h1>
      <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
        Free and Premium themes, UI Kit&apos;s, templates and landing pages are
        built with Tailwind CSS, HTML &amp; Next.js.
      </p>
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          {" "}
          {"ID:"} {id}{" "}
        </a>
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
          />
          <TeamCard
            jobTitle="Frontend Engineer"
            name="Barrington Patterson"
            id="2008034"
          />
          <TeamCard
            jobTitle="Language & Grammer Architect"
            name="Sharethia McCarthy"
            id="1908850"
          />

          <TeamCard
            jobTitle="UX, UI & Syntax Designer"
            name="Christina Wilson"
            id="Utech id"
          />
        </div>
      </div>
    </Section>
  );
};

export default Teams;
