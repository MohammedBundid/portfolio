import { useTheme } from "../ThemeContext";

const NotFound = () => {
  const { scheme } = useTheme();
  return (
    <main className={`px-10 py-5 ${scheme ? "dark-mode" : "light-mode"}`}>
      <section className="min-h-screen">
        <div className="text-center p-10 bg-gradient-to-r from-sky-950 to-cyan-900 text-white rounded-md text-xs md:text-xl w-full md:m-auto md:w-2/3">
          <div className="w-full h-full flex flex-col justify-center items-center  p-2 gap-3">
            <h1 className="text-6xl">404</h1>
            <h2 className="capitalize text-3xl">oops! page not found</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
