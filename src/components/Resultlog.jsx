import React from "react";

const ResultLog = ({ results }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      {results.map((result, index) => (
        <div
          key={index}
          className="bg-blue-950 p-4 pb-3 rounded-lg shadow-md flex flex-col items-center border border-gray-100 w-[200px] h-28 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <p className="text-lg font-semibold text-white mt-0 mb-1 text-center">
            {result.title}
          </p>
          <div className="w-28 bg-gray-300 rounded-full h-1 mt-2">
            <div
              className="bg-green-500 h-1 rounded-full"
              style={{ width: result.progress }}
            ></div>
          </div>
          <p className="text-white text-sm mt-1 mr-1 ml-1">{result.progress} completed</p>
        </div>
      ))}
    </div>
  );
};

export default ResultLog;
