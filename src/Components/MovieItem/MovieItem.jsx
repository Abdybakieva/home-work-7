// import movies from "../Main-Content/data";
import Content from "../Main-Content/MainContent";

export const MovieItem = ({ moviesData, deleteItem }) => {
  return (
    <>
      {moviesData.map((elem) => {
        return (
          <Content
            movies={moviesData}
            deleteItem={deleteItem}
            key={elem.id}
            movie={elem}
            name={elem.name}
            rating={elem.rating}
            url={elem.url}
          />
        );
      })}
    </>
  );
};
