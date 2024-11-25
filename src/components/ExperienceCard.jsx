export default function ExperienceCard({ title, text, location, date }) {
  return (
    <article>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-600">{text}</p>
      <p className="mt-2 text-slate-600">{location}</p>
      <p className="mt-2 text-slate-600">{date}</p>
    </article>
  );
}
