import Image from "next/image";

export default function Design() {
  return (
    <section id="design" className="flex p-20 flex-col h-[210vh]">
      <div id="title" className="mb-20">
        <h2 className="text-4xl text-center font-bold">Design UI/UX</h2>
        <p className="px-20 py-4 text-justify">
          Durante minha carreira tive o prazer de estudar e trabalhar como
          Design Gráfico, UI e UX Design. Então nesse espaço fica registrado o
          orgulho que tenho sobre essa fase. Foram projetos desafiadores que me
          trouxeram uma bagagem e aprendizado sem igual.
        </p>
      </div>
      <div className="w-full h-full">
        <Image
          alt={"site"}
          src="/images/templateFigma.png"
          width={700}
          height={600}
          className="w-4/6 comp-kjig6vic"
        />
        <div className="w-full h-1/2">
          <Image
            alt={"site"}
            src="/images/site1.png"
            width={700}
            height={600}
            className="ml-10 w-3/6 comp-kjig6vicm absolute -mt-80"
          />
        </div>
        <div className="">
          <Image
            alt={"site"}
            src="/images/site2.png"
            width={700}
            height={600}
            className="mt-20 ml-10 w-3/6 comp-kjig6vicmn"
          />
        </div>
      </div>
    </section>
  );
}
