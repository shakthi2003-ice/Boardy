"use client";
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "usehooks-ts"; // Change to useDebounce instead of useDebounceValue
import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500); // Debounce the value

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Convert debouncedValue to a string
    // const finalValue = debouncedValue?.toString() ?? "";

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boardy"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
