import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/common/Footer.tsx";
import { fetchJsonData } from "./api/fetchData.ts";
import Header from "./components/common/Header.tsx";
import ListSection from "./components/ListSection.tsx";
// @deno-types="@types/react"
function App() {
  const [data, setData] = useState<JSON[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const jsonData = await fetchJsonData<JSON[]>(backendUrl + "/news/1123/1");
      setData(jsonData);
    } catch (err) {
      setError(err as Error);
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
        <div className="absolute right-4 lg:right-12 flex flex-row gap-4 items-center bg-slate-400 rounded-md my-4 min-w-[40vh]">
          <button onClick={fetchData} disabled={loading}>
            {loading ? "Loading..." : "Re-fetch Data"}
          </button>
          {error && <div>Error: {error.message}</div>}
        </div>
        <div className="h-[100px]"></div>
      </section>
      <ListSection data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
