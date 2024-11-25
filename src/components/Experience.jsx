import { experience } from "../data";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";


export default function Experience() {
  return (
    <section className="bg-white py-20" id="experience">
    <div className="align-element"> 
      <SectionTitle text="experience" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {experience.map((experience) => {
          return <ExperienceCard key={experience.id} {...experience} />;
        })}
      </div>
    </div>
    </section>
  );
}
