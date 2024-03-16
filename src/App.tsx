import "./App.css";
import axios from "axios";
import { baseUrl } from "./constant";
import { useEffect, useState } from "react";
import { LoadingSpinner, QuoteCard, QuoteFilters } from "./components";
import { IQuote } from "./interface";
import { SortBy } from "./enum";

const App: React.FC = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy | null | any>(null);
  const [authors, setAuthors] = useState<{ value: string; label: string }[]>(
    []
  );
  const [datesAdded, setDatesAdded] = useState<
    { value: string; label: string }[]
  >([]);

  const fetchQuotes = async () => {
    setLoading(true);
    const response = await axios.get<{ results: IQuote[] }>(`${baseUrl}`);
    const data = response.data.results;
    setQuotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    const uniqueAuthors = Array.from(
      new Set(quotes.map((quote) => quote.author))
    ).map((author) => ({ value: author, label: author }));
    setAuthors(uniqueAuthors);

    const uniqueDatesAdded = Array.from(
      new Set(quotes.map((quote) => quote.dateAdded))
    ).map((dateAdded) => ({ value: dateAdded, label: dateAdded }));
    setDatesAdded(uniqueDatesAdded);
  }, [quotes]);

  const handleAuthorChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedAuthor(selectedOption?.value || "");
  };

  const handleDateChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedDate(selectedOption?.value || "");
  };

  const handleSortChange: any = (sortBy: SortBy) => {
    setSortBy(sortBy);
  };

  const filteredQuotes = quotes.filter((quote) => {
    const filterByAuthor = !selectedAuthor || quote.author === selectedAuthor;
    const filterByDateAdded = !selectedDate || quote.dateAdded === selectedDate;
    return filterByAuthor && filterByDateAdded;
  });

  const sortedQuotes = sortBy
    ? filteredQuotes.slice().sort((a, b) => {
        if (sortBy === SortBy.Id) {
          return a._id.localeCompare(b._id);
        } else if (sortBy === SortBy.Author) {
          return a.author.localeCompare(b.author);
        }
        return 0;
      })
    : filteredQuotes;

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-3">
        <h3>Number of quotes: {filteredQuotes.length}</h3>
        <QuoteFilters
          authors={authors}
          datesAdded={datesAdded}
          selectedAuthor={selectedAuthor}
          selectedDate={selectedDate}
          onAuthorChange={handleAuthorChange}
          onDateChange={handleDateChange}
          onSortChange={handleSortChange}
        />
      </div>

      <div className="p-3 grid grid-cols-3 gap-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          sortedQuotes.map((quote) => (
            <QuoteCard key={quote._id} quote={quote} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
