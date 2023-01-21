export default function About() {
  const tech = [
    { name: "Front-end" },
    { name: "Back-end" },
    { name: "Mobile" },
  ];

  return (
    <section id="sobre" className="w-screen flex flex-col items-center p-20">
      <h2 className="text-4xl font-bold">O desenvolvedor</h2>
      <p className="px-20 py-4 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor
        tenetur expedita fugit atque beatae quos aliquam iusto a eligendi enim
        aperiam, ad dolorum, soluta aliquid sint corrupti illo placeat? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur
        blanditiis impedit earum rem! Quis temporibus esse vitae possimus
        dolores rem, aut dicta sapiente dolore officia laboriosam eos minima
        vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        recusandae error, nobis, exercitationem minima aperiam nostrum eum
        maxime reprehenderit, esse sequi tempore facere cupiditate. Ratione
        dolorem vero quibusdam quos labore!
      </p>
      <div id="technologs" className="flex my-4">
        <ul className="list-none flex flex-row w-full justify-between">
          {tech.map((t) => (
            <li key={t.name} className="tech-card">
              {t.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        id="portfolio"
        className="bg-webPortfolio bg-fixed bg-cover w-screen h-[600px]"
      >
        <div className="p-20 h-full bg-top-gradient">
          <h2 className="text-4xl">Discovery Discovery Discovery Discovery</h2>
          <p className="text-md mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            fugiat amet, vel qui sapiente, incidunt veritatis fugit quas harum
            quod molestias accusamus rerum expedita officiis aliquam inventore
            itaque est sunt.
          </p>
        </div>
      </div>
    </section>
  );
}
