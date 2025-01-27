import { useState } from 'react'

function usePagination ({ itemsPerPage = 5, items = [] }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const pageItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const onPrev = () => setPage(page - 1)
  const onNext = () => setPage(page + 1)

  return { page, totalPages, pageItems, onPrev, onNext, itemsPerPage }
}
export default usePagination