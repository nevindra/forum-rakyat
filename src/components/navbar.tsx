export default function Navbar() {
  return (
    <header className="sticky top-2 left-0 right-0 w-full bg-white z-50 border-2 backdrop-blur rounded-lg my-4 mx-auto max-w-screen-lg">
      <div className="container mx-auto flex h-[55px] items-center gap-1 px-4 justify-between">
        <div className="hidden md:flex items-center gap-2">
          <a href="/" className="text-md text-black">
            Products
          </a>
          <a href="/" className="text-md text-black">
            Solutions
          </a>
          <a href="/" className="text-md text-black">
            Contact Us
          </a>
        </div>
        <button id="menu-button" className="md:hidden"></button>
      </div>
    </header>
  );
}
