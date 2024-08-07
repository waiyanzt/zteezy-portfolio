import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-black dark:text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ZTEEZY</h1>
      </header>

      <main className="flex-grow"></main>

      <Footer />
    </div>
  );
}
export default App;
