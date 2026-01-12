import { useEffect, useState } from 'react'

import useApi from '../../hooks/useApi'
import ProductCard from '../../components/ProductCard'
import Loading from '../../components/Loading/Loading'
import ErrorState from '../../components/Error/Error'

function Home() {
  const { data, loading, error, retry } = useApi()
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false)
      }, 1200)

      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <>
      <div className="container">
        {showLoading && <Loading />}

        {!showLoading && error && (
          <ErrorState message={error} onRetry={retry} />
        )}

        {!showLoading && !error && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Home


