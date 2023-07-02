import { Hero,SearchBar, CustomFilter } from '@/components';
import { fetchCars } from '@/utils';
import Image from 'next/image';

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">
             Car Catalog
          </h1>
          <p>
            Explore and choose the car you might like!
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? ( 
          <section>
            We Have The Cars You Need!
          </section>
        ):(
          <div>
            <h2>
              
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}
