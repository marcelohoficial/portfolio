import Image from "next/image";

export default function Design() {
  return (
    <section id="design" className="flex p-20 flex-col h-[210vh]">
      <div id="title" className="mb-20">
        <h2 className="text-4xl text-red-600">Design UI/UX</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          id facilis dolor temporibus. Ducimus eum aliquid quisquam autem
          labore, sapiente dolorum voluptatibus aliquam deleniti quae, porro
          inventore architecto accusamus fugit?
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
        <div className="bg-red-700 w-full h-1/2">
          <Image
            alt={"site"}
            src="/images/site1.png"
            width={700}
            height={600}
            className="ml-10 w-3/6 comp-kjig6vicm absolute -mt-80"
          />
        </div>
        <div className="bg-green-400">
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
