import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import { IOption } from "./Select";
import { ChangeEvent } from "react";

type SortByProp = {
  options: IOption[];
};

const SortBy = ({ options }: SortByProp) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  const sortBy = searchParams.get("sortBy") || "popularity.desc";

  return <Select options={options} onChange={handleChange} value={sortBy} />;
};

export default SortBy;
