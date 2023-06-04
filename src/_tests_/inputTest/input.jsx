import * as S from "../../pages/search/style";

export const InputTest = (props) => {
  const { placeholder, value, onChange } = props;
  return (
    <S.SearchInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
