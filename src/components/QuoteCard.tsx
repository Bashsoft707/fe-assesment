import React from "react";
import { QuoteCardProps } from "../interface";

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <div className="float-right">
        <div className="w-6 h-6 flex justify-center items-center bg-gray-200 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
          {quote.length}
        </div>
      </div>
      <p className="text-gray-600 text-xl mb-2 text-gray-900 dark:text-white fon-bold">
        {quote.author}
      </p>
      <p className="text-gray-800 text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
        {quote.content}
      </p>
      <div className="flex flex-wrap mb-4">
        {quote.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between self-end text-xs text-gray-900 dark:text-white">
        <p>Date Added: {quote.dateAdded}</p>
        <p>Date Modified: {quote.dateModified}</p>
      </div>
    </div>
  );
};
