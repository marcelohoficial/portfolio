export default function Footer() {
  const lista = [
    "vó",
    "f",
    "v",
    "alcimara",
    "f",
    "matheus",
    "st",
    "mae",
    "neide",
    "j",
    "j",
    "j",
    "l",
    "l",
    "l",
    "m",
    "bruna",
    "leandro",
    "daniel",
    "t",
    "clistenes",
    "rellen",
  ];
  function teste() {
    alert(lista.length);
  }

  return (
    <section
      id="contato"
      className="h-screen flex flex-col justify-between items-center"
    >
      <div className="w-4/5 h-full flex flex-col">
        <ul className="w-full flex justify-around my-40">
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
        </ul>
        <div className="px-20 py-4 text-justify">
          <span className="font-bold">
            Obrigado por chegar até aqui, sigo me reinventando todos os dias
            para alcançar ainda mais resultados. É um caminho longo e árduo, mas
            faço com muito amor, descobri no desenvolvimento uma paixão sem
            igual, e por isso e muito mais sonhos, eu quero ir além.
          </span>
        </div>
      </div>
      <div className="border-b-2 w-full opacity-20" />
      <div className="w-full h-10 flex justify-center items-center text-md">
        Marcelo Henrique - 2023
      </div>
    </section>
  );
}
