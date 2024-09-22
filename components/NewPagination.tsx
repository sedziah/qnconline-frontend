import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const NewPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Log the received props to confirm they are being passed correctly
  console.log("Pagination Props - currentPage:", currentPage, "totalPages:", totalPages)

  // Handle previous page click
  const handlePrevious = () => {
    if (currentPage > 1) {
      console.log("Navigating to previous page:", currentPage - 1)
      onPageChange(currentPage - 1)
    }
  }

  // Handle next page click
  const handleNext = () => {
    if (currentPage < totalPages) {
      console.log("Navigating to next page:", currentPage + 1)
      onPageChange(currentPage + 1)
    }
  }

  // Generate an array of page numbers [1, 2, 3, ..., totalPages]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="mt-10 flex justify-center items-center gap-x-1" aria-label="Pagination">
      {/* Previous Button */}
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-x-1">
        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg ${page === currentPage ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
            onClick={() => {
              console.log("Navigating to page:", page)
              onPageChange(page)
            }}
            disabled={page === currentPage}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  )
}
