import React from "react";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import { useCustomContext } from "@/contextApi/Context";
import { LANGUAGE_LIST } from "@/lib/constant";
import useAxios from "@/lib/axiosInstance";

const OutputWindow = ({ language, sourceCode }) => {
  // const { state, dispatch } = useCustomContext();
  // console.log("state: ", state);

  const { data, error, loading, fetchData } = useAxios("https://emkc.org/api/v2/piston/execute", "POST", {
    language: "js",
    version: LANGUAGE_LIST[language],
    files: [
      {
        name: "my_cool_code.js",
        content: "console.log('vijay')",
      },
    ],
  });

  const handleExecute = () => {
    console.log("first", sourceCode?.current?.getValue());
    fetchData();
  };

  return (
    <div>
      <p className='font-semibold'>Output</p>
      <Button variant='outline' className='mt-3' onClick={handleExecute}>
        <PlayIcon /> Run{" "}
      </Button>
    </div>
  );
};

export default React.memo(OutputWindow);
