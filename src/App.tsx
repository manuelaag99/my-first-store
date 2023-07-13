import { ChangeEvent, useState } from 'react'

import "./app.scss";
import BottomSection from './components/BottomSection';
import FilterSetion from './components/FilterSection';
import ProductsGrid from './components/ProductsGrid';
import TopSection from './components/TopSection';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function getSearchQuery (event: ChangeEvent<HTMLInputElement>) {setSearchQuery(event.target.value)}

  return (
    <>
      <div className='big-container '>
        <TopSection getSearchQuery={getSearchQuery} />
        <div className='middle-container'>
          <FilterSetion />
          <ProductsGrid searchQuery={searchQuery}  />
        </div>
        <BottomSection />
      </div>
    </>
  )
}

export default App
