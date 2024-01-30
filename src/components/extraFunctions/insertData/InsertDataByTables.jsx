"use client";
export const InsertDataByTables = ({ data, inputValues, setInputValues }) => {
  const handleInputChange = (e, columnName) => {
    const newValue =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setInputValues({
      ...inputValues,
      [columnName]: newValue,
    });
  };
  return (
    <div className="flex justify-end">
      <div className="mt-1 space-x-4">
        <span className="text-sm text-gray-500">{data?.column_name}</span>

        <input
          className="bg-blue-100 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          type={`${
            data?.data_type == "character varying"
              ? "text"
              : data?.data_type == "date"
              ? "date"
              : "number"
          }`}
          value={inputValues[data?.column_name] || ""}
          onChange={(e) => handleInputChange(e, data?.column_name)}
          placeholder={data?.data_type}
        />
      </div>
    </div>
  );
};
