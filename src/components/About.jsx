import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
export default function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm an enthusiastic recent IT graduate specializing in Software
            Development, with a robust understanding of programming languages
            and web technologies. My passion lies in leveraging my academic
            background to solve real-world challenges and advance in the field
            of web development. As a quick learner and adaptable team player, I
            thrive in dynamic work environments where collaboration and
            innovation drive success. My commitment to continuous learning fuels
            my desire to contribute effectively and make meaningful
            contributions to projects.
          </p>
        </article>
      </div>
    </section>
  );
}
