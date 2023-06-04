import { useSelector } from "react-redux";
import { useGetUserInfoQuery } from "../../api/serach-api";
import * as S from "./style";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function UserInfo() {
  const Login = useSelector((state) => state.userLogin.userLogin);
  const { data, isLoading, error } = useGetUserInfoQuery({
    userLogin: Login,
  });
  return (
    <S.Content>
      {error ? (
        <h3>Oh no, there was an error</h3>
      ) : isLoading ? (
        <div>
          Loading...
          <FontAwesomeIcon
            icon={faFan}
            beat
            size="2xl"
            style={{ color: "#266fed" }}
          />
        </div>
      ) : null}
      {data ? (
        <S.UserInfoDiv>
          <img src={data.items[0].avatar_url} alt="userLogo" />
          <S.UserName>Имя:{data.items[0].login}</S.UserName>
          <a href={data.items[0].html_url}>Ссылка на репозиторий</a>
        </S.UserInfoDiv>
      ) : null}
      <Link to='/'>
        <S.RewindButton>⬅</S.RewindButton>
      </Link>
    </S.Content>
  );
}
