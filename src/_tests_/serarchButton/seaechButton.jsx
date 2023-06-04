import * as S from "../../pages/search/style";

export const SearchButton = ({
  type = "button",
  onClick,
  children,
  dataTestId,
}) => {
  return (
    <S.SearchButton
      type={type}
      onClick={() => onClick({ name: "Name" })}
      data-testid={dataTestId}
    >
      {children}
    </S.SearchButton>
  );
};