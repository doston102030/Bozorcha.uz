
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/Error/Error";

function Home() {
  const { data, loading, error, retry } = useApi();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <Navbar />

      <main className="grow py-10">
        <div className="container">
     
          {showLoading && <Loading />}

          {!showLoading && error && (
            <ErrorState message={error} onRetry={retry} />
          )}

       
          {!showLoading && !error && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {data?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
