export default function Header() {
  return (
    <>
      <header
        id="header"
        className="flex justify-around w-screen h-16 
        border-b-[1px] border-b-indigo-500 shadow-sm shadow-indigo-400"
      >
        <div className="bg-red-500 w-1/6">a</div>
        <div className="bg-blue-500 w-3/5">
          <ul className="list-none h-full flex justify-evenly items-center text-white">
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>
      </header>
    </>
  );
}
