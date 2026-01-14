import { useSearchParams } from "react-router";
import { SearchIcon } from "../../icons/icons";

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder = "Search" }: SearchInputProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("search") || "";

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    setSearchParams(params, { replace: true });
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon size={16} />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="block w-56 rounded-md border border-black-alpha-8 py-1 pl-9 pr-3 placeholder-light-gray shadow-xs focus:outline-none focus:ring-1 focus:ring-black"
        placeholder={placeholder}
      />
    </div>
  );
}
