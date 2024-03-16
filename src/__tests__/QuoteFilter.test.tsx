import { render, fireEvent } from '@testing-library/react';
import {QuoteFilters} from '../components';

const mockAuthors = [
  { value: 'author1', label: 'Author 1' },
  { value: 'author2', label: 'Author 2' },
];

const mockDates = [
  { value: '2023-01-01', label: '2023-01-01' },
  { value: '2023-01-02', label: '2023-01-02' },
];

test('renders the QuoteFilters component', () => {
  const { getByText } = render(
    <QuoteFilters
      authors={mockAuthors}
      datesAdded={mockDates}
      selectedAuthor=""
      selectedDate=""
      onAuthorChange={jest.fn()}
      onDateChange={jest.fn()}
      onSortChange={jest.fn()}
    />
  );
  expect(getByText('Select Author')).toBeInTheDocument();
  expect(getByText('Select Date Added')).toBeInTheDocument();
});
