import React from "react";
import Select from "react-select";
import { QuoteFilterProps } from "../interface";
import { SortBy } from "../enum";

export const QuoteFilters: React.FC<QuoteFilterProps> = ({
  authors,
  datesAdded,
  selectedAuthor,
  selectedDate,
  onAuthorChange,
  onDateChange,
  onSortChange
}) => {
  return (
    <div className="flex mr-4 mb-4">
      <Select
        className="w-4/4 mr-4"
        isClearable={true}
        placeholder="Select Author"
        options={authors}
        value={authors.find((data) => data.value === selectedAuthor)}
        onChange={onAuthorChange}
      />
      <Select
        className="w-4/4 mr-4"
        isClearable={true}
        placeholder="Select Date Added"
        options={datesAdded}
        value={datesAdded.find((data) => data.value === selectedDate)}
        onChange={onDateChange}
      />
      <Select
        className="w-4/4"
        isClearable={true}
        placeholder="Sort By"
        options={[
          { value: SortBy.Id, label: "ID" },
          { value: SortBy.Author, label: "Author" },
        ]}
        onChange={(selectedOption) => onSortChange(selectedOption?.value as SortBy)}
      />
    </div>
  );
};
