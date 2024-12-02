import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { LANGUAGE_LIST } from "@/lib/constant";

const LangSelect = ({ language, onSelect }) => {
  const languages = Object.entries(LANGUAGE_LIST);

  return (
    <Select defaultValue={language} onValueChange={onSelect}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a Language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>JavaScript</SelectLabel> */}
          {languages.map(([lang, version]) => (
            <SelectItem key={`${lang}_${version}`} value={lang}>
              <span className='font-semibold capitalize'> {lang}</span> <span className='text-gray-500'>({version}) </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default React.memo(LangSelect);
