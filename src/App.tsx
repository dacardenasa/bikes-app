import { useEffect, useState, createContext } from 'react';
import { IRootBike, IContextProps, IBike } from '@/interfaces/bikes.interface';
import { Layout, SearchForm, BikesCases } from '@/components';
import { fetchAPI } from '@/services/api.search.service';

import './App.css';
import './Global.css';

export const MyContext = createContext<IContextProps>({});

function App() {
  const [bikesData, setBikesData] = useState<IRootBike[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setIsFetchingData((c) => !c);
    fetchAPI({ location: 'berlin' }).then((response) => {
      setIsFetchingData((c) => !c);
      setBikesData(response);
    });
  }, []);

  return (
    <MyContext.Provider
      value={{
        bikesCases: bikesData,
        handleBikesData: (data: IRootBike[]) => setBikesData(data),
        isFetchingData,
        handleFetchingData: () => setIsFetchingData((c) => !c),
      }}
    >
      <div className="App">
        <Layout>
          <SearchForm />
          <BikesCases />
        </Layout>
      </div>
    </MyContext.Provider>
  );
}

export default App;
