import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/common/Footer.tsx";
import { fetchJsonData } from "./api/fetchData.ts";
import Header from "./components/common/Header.tsx";
import ListSection from "./components/ListSection.tsx";
// @deno-types="@types/react"
function App() {
  const [data, setData] = useState<JSON[] | null>(null);
  const [date, setDate] = useState(() => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${month}${day}`;
  });
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const backendUrl: string = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(backendUrl + `/${date}/1`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="relative wrapper">
        <form className="absolute right-4 lg:right-12 flex flex-row gap-4 items-center bg-gradient-to-r from-slate-400 to-slate-800 rounded-md my-4 p-2 min-w-[40vh]">
          <input
            type="date"
            value={`${new Date().getFullYear()}-${date.slice(
              0,
              2
            )}-${date.slice(2)}`}
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              const month = String(selectedDate.getMonth() + 1).padStart(
                2,
                "0"
              );
              const day = String(selectedDate.getDate()).padStart(2, "0");
              setDate(`${month}${day}`);
            }}
          />
          <button
            onClick={fetchData}
            disabled={loading}
            className={`${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Loading..." : "Re-fetch Data"}
          </button>
          <div className="w-[20vw] max-w[20vw] overflow-hidden text-white">
            <span>{error && <div>Error: {error.message}</div>}</span>
          </div>
        </form>
        <div className="h-[100px]"></div>
      </section>
      <ListSection data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
