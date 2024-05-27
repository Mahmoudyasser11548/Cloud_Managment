import React from "react";
import { SearchBox } from "@fluentui/react-components";
import { useDebouncedCallback } from "use-debounce";
import { useTranslation } from "react-i18next";

interface SearchInputProps {
  filter: any;
  setFilter: (filter: any) => void;
}

const SearchInput = ({ filter, setFilter }: SearchInputProps) => {
  const { t } = useTranslation();

  const debounced = useDebouncedCallback((value: string) => {
    setFilter({ ...filter, filter: value });
  }, 1000);

  return (
    <div className="flex items-center max-w-60 mb-2">
      <SearchBox placeholder={t("search")} onChange={(e) => debounced(e.target.value)}/>
    </div>
  );
};

export default SearchInput;
