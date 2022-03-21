import { useEffect, useState, createContext } from 'react';
import { IRootBike, IContextProps } from '@/interfaces/bikes.interface';
import { Layout, SearchForm, BikesCases } from '@/components';
import { LOCATION_LIST } from '@/constants/config';
import { fetchAPI } from '@/services/api.search.service';

import './App.css';
import './Global.css';

export const MyContext = createContext<IContextProps>({});

function App() {
  const [bikesData, setBikesData] = useState<IRootBike[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const [errorRequest, setErrorRequest] = useState<string | null>(null);
  const [isFetchingByFilters, setIsFetchingByFilters] =
    useState<boolean>(false);

  useEffect(() => {
    setIsFetchingData((c) => !c);
    fetchAPI({ location: LOCATION_LIST.berlin })
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
        handleFetchingData: (isLoading: boolean) =>
          setIsFetchingData(isLoading),
        cleanErrorState: () => setErrorRequest(null),
        handleErrorRequest: (error: string) => setErrorRequest(error),
        errorRequest,
        isFetchingByFilters,
        handleFetchingFilters: () => setIsFetchingByFilters((c) => !c),
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
