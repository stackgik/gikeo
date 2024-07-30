import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type SearchFieldProp = {
  setIsSearchFieldOpen?: Dispatch<SetStateAction<boolean>>;
};

const SearchField = ({ setIsSearchFieldOpen }: SearchFieldProp) => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleQuery = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target?.value?.trimStart().trimEnd().toLowerCase();
    setQuery(query);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.length < 3) return;
    searchParams.set("query", query);
    navigate(`/search?query=${query}`);
    if (setIsSearchFieldOpen) setIsSearchFieldOpen(false);
  };

  const clearQuery = () => {
    setQuery("");
    searchParams.delete("query");
    setSearchParams(searchParams);
    navigate("/dashboard");
  };

  return (
    <div className="grid w-[400px] grid-cols-[auto_1fr_auto] items-center gap-6 rounded-[40px] bg-grey-50 px-6 py-4 tablet:w-full tablet:border tablet:border-grey-200 dark:bg-dark-grey-50 dark:tablet:border-dark-grey-200">
      <HiOutlineMagnifyingGlass className="h-[25px] w-[25px] text-grey-500 tablet:h-[15px]" />
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies and tv series..."
          className="w-full bg-transparent text-[1.5rem] outline-none dark:text-dark-grey-800"
          value={query}
          onChange={handleQuery}
        />
      </form>

      <HiOutlineXMark
        className="h-[15px] w-[15px] cursor-pointer text-grey-500"
        onClick={clearQuery}
      />
    </div>
  );
};

export default SearchField;
