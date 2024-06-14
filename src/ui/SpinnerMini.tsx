// import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini() {
  return (
    <BiLoaderAlt className="mx-auto block h-[1.5rem] w-[1.5rem] animate-spin text-grey-0" />
  );
}

export default SpinnerMini;
