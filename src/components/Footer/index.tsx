export default function Footer() {
  return (
    <section
      id="footer"
      className="h-screen flex flex-col justify-between items-center"
    >
      <div className="w-4/5 h-full flex flex-col">
        <ul className="w-full flex justify-around my-40">
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
        </ul>
        <div className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla
          reiciendis, laborum reprehenderit, ducimus molestiae, vero autem ea
          non voluptas tempore quae velit. Culpa iure quisquam nemo fugiat
          voluptatem itaque.
        </div>
      </div>
      <div className="w-full h-8 flex justify-center items-center text-md">
        Marcelo Henrique
      </div>
    </section>
  );
}
