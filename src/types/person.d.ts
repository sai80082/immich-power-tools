export interface IPerson {
  id:            string;
  name:          string;
  birthDate:     string | null;
  thumbnailPath: string;
  isHidden:      boolean;
  updatedAt:     Date;
  assetCount:   number;
  similarity?:   number;
}

interface IPeopleListResponse extends IListData{
  people: IPerson[]
  total: number
}