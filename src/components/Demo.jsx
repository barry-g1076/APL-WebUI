import Heading from "./Heading";
import Section from "./Section";
import Terminal from "./Terminal";
// import CodeEditor from "./CodeEditor";
const Demo = () => {
  return (
    <Section id="demo">
      <Heading
        tag="Demo"
        title="The future of programming with TypeSnake's AI-enhanced editor."
      />
      <div className="flex w-full justify-evenly items-center">
        {/* <CodeEditor /> */}
        <Terminal />
      </div>
    </Section>
  );
};

export default Demo;
