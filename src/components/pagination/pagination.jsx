import * as S from "./style";

export const Pagination = ({ resultPerPage, totalLogins, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLogins / resultPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <S.Paginate>
        {pageNumbers.map((number) => (
            <S.PageNumberButton key={number} onClick={() => paginate(number)}>
              {number}
            </S.PageNumberButton>
        ))}
    </S.Paginate>
  );
};
