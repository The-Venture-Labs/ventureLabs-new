import Hero from "../assets/hero.png";

function Home() {
  return (
    <div className="bg-heroBack md:flex justify-between ">
      <div className="flex-col text-center md:my-28  mx-20 flex-auto space-y-3 pt-16 sm:pt-0">
        <div className="text-white font-bold text-3xl sm:">
          Grow Your Buisness with
        </div>

        <div class="font-bold bg-gradient-to-b from-blue-900 to-blue-500 text-transparent bg-clip-text text-4xl">
          VENTURE LABS
        </div>
      </div>
      <div className="md:flex">
        <div className="text-white flex-col text-center m-5 space-y-5 mt-24">
          <div className="font-bold">Ab dhandha karna hua easy</div>
          <div>
            <span> Book your slot</span>
            <span className="text-red-500"> NOW</span>
          </div>
          <div class=" rounded border-b-2 border-grey-dark overflow-hidden sm:mx-8 sm:block flex justify-center items-center w-48 mx-auto">
            <button class="block text-white text-sm shadow-border bg-btnColor py-2 sm:px-4 font-sans tracking-wide uppercase font-bold  hover:bg-green-600 transform transition duration-300 hover:scale-110 w-48">
              Schedule a Call
            </button>
          </div>
        </div>
        <div>
          <img src={Hero} alt="" className="w-96 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home;
