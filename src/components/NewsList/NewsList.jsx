import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';
import { useGetNewsQuery } from '../../redux/API/RTKQueryApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledPagination } from '../../ui/pagination/StyledPagination.styled';

function NewsList() {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setLimit(11);
      } else if (width <= 1024) {
        setLimit(10);
      } else {
        setLimit(12);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { data, error, isLoading } = useGetNewsQuery({
    params: {
      page: currentPage,
      limit,
      ...searchParamsObject,
    },
  });

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <List>
      {isLoading && <div>Loading...</div>}
      {data ? (
        <>
          {data.news.map(({ _id, imgUrl, title, text, date, url, id }) => (
            <NewsItem
              key={_id}
              id={id}
              image={imgUrl}
              title={title}
              description={text}
              date={date}
              url={url}
            />
          ))}
          {data.length === 0 && <div>No News Found</div>}
          {data.length !== 0 && (
            <StyledPagination
              count={Math.ceil(data.totalCount / limit)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          )}
        </>
      ) : (
        <div>No News Found</div>
      )}
      {error && <div>{error.message}</div>}
    </List>
  );
}

export default NewsList;
