const Header = () => {
  return (
    <header className="w-full h-20 px-10 flex items-center justify-between bg-gray-900 mb-14">
      <h1 className="text-white text-3xl">ReduxCart</h1>
      <nav>
        <ul className="flex">
          <li>
            <button className="text-white flex gap-x-5 items-center border border-solid border-[#1a8ed1] px-4 py-2 w-[150px] rounded-md">
              <span>My Cart</span>
              <span className="bg-[#1ad1b9] rounded-3xl px-1 py-1">1</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
