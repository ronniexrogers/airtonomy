import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";
import { useEffect } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = useState(
    blogs.posts.slice(0, 15)
  );
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const updateRowsPerPage = (e) => {
    setCurrentPaginationData(blogs.posts.slice(0, Number(e)));
    setRowsPerPage(Number(e));
    setCurrentPage(1);
  };

  const updatePage = (page) => {
    setCurrentPaginationData(
      blogs.posts.slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage)
    );
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
