import Section from "./Section";
import Heading from "./Heading";
import {
  acknowledgement1,
  acknowledgement2,
  acknowledgement3,
  check,
} from "../assets";
import {
  typesnakeAcknowledgements,
  typesnakeAcknowledgementsIcons,
} from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  CodeChatMessage,
} from "./design/Acknowledgements";

import Generating from "./Generating";

const Acknowledgements = () => {
  return (
    <Section id="acknowledgements">
      <div className="container">
        <Heading title="Proudly UTECH" text="Excellence Through Knowledge" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Azure Powered"
                height={730}
                src={acknowledgement1}
              />
            </div>

            <div className="relative z-1 max-w-[21rem] ml-auto">
              <h4 className="h4 mb-4">AZURE Powered💪</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Made possible by the collaboration of UTECH and Microsoft.
              </p>
              <ul className="body-2">
                {typesnakeAcknowledgements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating
              text="parsing code"
              className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={acknowledgement2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Code Generation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your code using our built-In AI. Try it
                  now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">LLM Integration</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  TypeSnake: Where powerful coding meets Al, all in one editor.
                </p>

                <ul className="flex items-center justify-between">
                  {typesnakeAcknowledgementsIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-4 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-2 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={acknowledgement3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <CodeChatMessage />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Acknowledgements;
