import * as S from "./style";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "../../components/pagination/pagination";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserValue } from "../../slices/useValueSlice";
import { setUserLogin } from "../../slices/userLoginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShowError } from "../../components/ShowErroe/ShowError";
const { Octokit } = require("@octokit/rest");

export default function Search() {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_TOKEN,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showButtonsPrevNext, setShowButtonsPrevNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [getAllResult, setGetAllResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage] = useState(20);
  const userV = useSelector((state) => state.userValue.userValue);
  const lastLoginIndex = currentPage * resultPerPage;
  const firstLoginIndex = lastLoginIndex - resultPerPage;
  const currentLogin = getAllResult.slice(firstLoginIndex, lastLoginIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((next) => next + 1);
  const prevPage = () => setCurrentPage((next) => next - 1);

  function Show(e) {
    dispatch(
      setUserLogin({
        userLogin: e.target.innerHTML,
      })
    );
    navigate("/userInfo");
  }

  async function getPages(move) {
    try {
      setIsLoading(!isLoading);
      const data = await octokit.paginate(
        `https://api.github.com/search/users?q=${userV}&${move}`,
        {
          per_page: 20,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      setGetAllResult(data);
    } catch (err) {
      setIsError(err.message);
    }
    setShowButtonsPrevNext(!showButtonsPrevNext);
    setShowButtonsPrevNext(true);
    setIsLoading("");
  }

  function ShowResult() {
    getPages();
    setGetAllResult("");
    setShowButtonsPrevNext("");
  }
  function SortMax() {
    getPages("sort=repositories&order=desc");
    setGetAllResult("");
    setShowButtonsPrevNext("");
  }
  function SortMin() {
    getPages("sort=repositories&order=asc");
    setGetAllResult("");
    setShowButtonsPrevNext("");
  }
  return (
    <S.Content>
      <S.SearchBlockDiv>
        <div>
        <S.SearchInput
          type="text"
          placeholder="Введите логин GitHub"
          onChange={(e) => {
            dispatch(
              setUserValue({
                userValue: e.target.value,
              })
            );
            setIsError("");
          }}
        />
        <S.ErrorDiv>
          {isError ? <span>{ShowError(isError)}</span> : null}
        </S.ErrorDiv>
        </div>
        <S.SearchButton onClick={ShowResult}>Найти</S.SearchButton>
      </S.SearchBlockDiv>
      <S.SortResultDiv>
        <span>Сортировать по:</span>
        <S.SortContent>
          <S.SortDiv>
            <S.SortSpan onClick={SortMax}> возрастанию ☝</S.SortSpan>
          </S.SortDiv>
          <S.SortDiv>
            <S.SortSpan onClick={SortMin}> убыванию 👇</S.SortSpan>
          </S.SortDiv>
        </S.SortContent>
      </S.SortResultDiv>

      <S.ResultDiv>
        {getAllResult ? (
          <div>
            {currentLogin.map((item) => (
              <S.LoginU onClick={Show} key={item.login}>
                {item.login}
              </S.LoginU>
            ))}
          </div>
        ) : null}
        <Pagination
          resultPerPage={resultPerPage}
          totalLogins={getAllResult.length}
          paginate={paginate}
        />
        <S.PrevNextButtons
          style={{ display: showButtonsPrevNext ? "block" : "" }}
        >
          <S.RewindButton onClick={prevPage}>⬅</S.RewindButton>
          <S.RewindButton onClick={nextPage}> ➡ </S.RewindButton>
        </S.PrevNextButtons>
        <S.LoaderDiv style={{ display: isLoading ? "block" : "" }}>
          <S.LoaderSpan>Loading...</S.LoaderSpan>
          <FontAwesomeIcon
            icon={faFan}
            beat
            size="2xl"
            style={{ color: "#266fed" }}
          />
        </S.LoaderDiv>
      </S.ResultDiv>
    </S.Content>
  );
}
