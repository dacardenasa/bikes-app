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
  const [errorRequest, setErrorRequest] = useState<string | null>(null);

  useEffect(() => {
    setIsFetchingData((c) => !c);
    fetchAPI({ location: 'berlin' })
      .then((response) => {
        setErrorRequest(null);
        setIsFetchingData((c) => !c);
        setBikesData(response);
      })
      .catch((e) => {
        setIsFetchingData((c) => !c);
        setErrorRequest(e);
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        bikesCases: bikesData,
        handleBikesData: (data: IRootBike[]) => setBikesData(data),
        isFetchingData,
        handleFetchingData: () => setIsFetchingData((c) => !c),
        cleanErrorState: () => setErrorRequest(null),
        handleErrorRequest: (error: string) => setErrorRequest(error),
        errorRequest,
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
