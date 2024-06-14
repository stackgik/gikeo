import { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-grey-400 uppercase tracking-widest text-[1.3rem] font-semibold">
      {children}
    </span>
  );
};

export default Tag;
