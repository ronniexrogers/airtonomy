export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
}) {
  /*
      This hook I have written works as follows:
        1. I created a numberOfPages variable that takes the amount of posts divided by page size and I round it up.
        2. Then I use a couple of if statements to check which page I'm on and render the pagination accordingly
        3. If the page size is equal or greater than the amount of posts, it just returns 1 page
  */

  const numberOfPages = Math.ceil(totalCount / pageSize)

  if(pageSize >= totalCount) return [1]
  if(currentPage === 1 || currentPage === 2) return [1, 2, 3, DOTS, numberOfPages]
  if(currentPage === numberOfPages || currentPage === numberOfPages-1) return [1, DOTS, numberOfPages-2, numberOfPages-1, numberOfPages]
  return [1, DOTS, currentPage-1, currentPage, currentPage+1, DOTS, numberOfPages]

}

export default usePagination;
