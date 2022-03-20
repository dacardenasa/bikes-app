export interface IBike {
  date_stolen?: number;
  description?: any;
  frame_colors?: string[];
  frame_model?: string;
  id?: number;
  is_stock_img?: boolean;
  large_img?: any;
  location_found?: any;
  manufacturer_name?: string;
  external_id?: any;
  registry_name?: any;
  registry_url?: any;
  serial?: string;
  status?: string;
  stolen?: boolean;
  stolen_coordinates?: number[];
  stolen_location?: string;
  thumb?: any;
  title?: string;
  url?: string;
  year?: number;
}

export interface IRootBike {
  bikesCases: IBike[];
}

export interface IBikeCardProps {
  bikeCase: IBike;
}

export interface IContextProps {
  bikesCases?: IRootBike[];
  handleBikesData?: (data: IRootBike[]) => void;
  isFetchingData?: boolean;
  handleFetchingData?: () => void;
}

export interface IParams {
  startDate?: string;
  endDate?: string;
  description?: string;
  location?: string;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ICalendarData {
  date: string;
  handleDate: (field: string) => void;
  title: string;
}
