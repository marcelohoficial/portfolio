export default function About() {
  const tech = [
    { name: "Front-end" },
    { name: "Back-end" },
    { name: "Mobile" },
  ];

  return (
    <section id="sobre" className="w-screen flex flex-col items-center p-20">
      <h2 className="text-4xl font-bold">Sobre Mim</h2>
      <p className="px-20 py-4 text-justify">
        Durante toda minha carreira passei por várias etapas de evolução,
        iniciando na tecnologia como Design Gráfico, fui expandindo para UI e UX
        Design, segui estudando desenvolvimento até aparecer oportunidades
        profissionais na área, atualmente sou Desenvolvedor Full Stack na
        empresa, usamos várias tecnologias para desenvolver soluções modernas.
        Apaixonado por tecnologia e desenvolvimento, gosto de desafios e novas
        descobertas, busco pensar fora da caixa, ser uma pessoa melhor a cada
        oportunidade.
      </p>
      <div id="technologs" className="flex my-4">
        <ul className="list-none flex flex-row w-full justify-between">
          {tech.map((t) => (
            <li
              key={t.name}
              className="tech-card flex justify-center items-center"
            >
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
          <h2 className="text-4xl">Uma galeria cheia de orgulho.</h2>
          <div className="w-fit bg-white rounded-full px-6 py-1 text-black mt-4 hover:opacity-95 cursor-pointer">
            Em breve
          </div>
          <p className="text-md mt-2 w-3/5"></p>
        </div>
      </div>
    </section>
  );
}
