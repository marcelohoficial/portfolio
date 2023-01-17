import Image from "next/image";

export default function Banner() {
  const myBanners = [
    { src: "images/banners/1mockup-card2.svg", alt: "Banner" },
    { src: "images/banners/2mockup-card2.svg", alt: "Banner" },
    { src: "images/banners/3mockup-content.svg", alt: "Banner" },
    { src: "images/banners/4mockup2-bg.svg", alt: "Banner" },
    { src: "images/banners/5mockup3-bg.svg", alt: "Banner" },
  ];

  return (
    <>
      <div id="banner" className="flex text-white">
        <div id="description" className="w-2/5 p-4">
          <h2>Titulo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius
            minus accusantium rerum, nam pariatur? Aperiam ea impedit ducimus
            ipsa maxime molestiae aspernatur nobis iusto modi? Consectetur
            numquam modi ratione!
          </p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            a, praesentium deleniti cum soluta quos, ut voluptate doloribus eum
            illo, similique quas corporis? Nam suscipit ullam neque nemo? Nulla,
            debitis?
          </span>
        </div>
        <div id="images" className="w-3/5 p-4 dzunxg">
          <Image
            src="/images/banners/1mockup-card2.svg"
            alt="Banner"
            width={100}
            height={100}
            className="dzunxg"
          />
          <Image
            src="/images/banners/2mockup-card2.svg"
            alt="Banner"
            width={100}
            height={100}
            className="dzunxg"
          />
          <Image
            src="/images/banners/3mockup-content.svg"
            alt="Banner"
            width={100}
            height={100}
            className="dzunxg"
          />
          <Image
            src="/images/banners/4mockup2-bg.svg"
            alt="Banner"
            width={100}
            height={100}
            className="dzunxg"
          />
          <Image
            src="/images/banners/5mockup3-bg.svg"
            alt="Banner"
            width={100}
            height={100}
            className="dzunxg"
          />
        </div>
      </div>
    </>
  );
}
