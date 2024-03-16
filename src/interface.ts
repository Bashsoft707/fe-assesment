import { SortBy } from "./enum";

export interface IQuote {
  _id: string;
  author: string;
  dateAdded: string;
  length: number;
  tags: string[];
  dateModified: string;
  content: string;
  authorSlug: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface QuoteFilterProps {
  authors: Option[];
  datesAdded: Option[];
  selectedAuthor: string;
  selectedDate: string;
  onAuthorChange: (option: Option | null) => void;
  onDateChange: (option: Option | null) => void;
  onSortChange: (sortBy: SortBy) => void;
}

export interface QuoteCardProps {
  quote: IQuote;
}
