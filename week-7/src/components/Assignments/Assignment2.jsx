import { useEffect, useState } from "react";

const colors = [
  {
    name: "Red",
    value: "#771d1d",
  },
  {
    name: "Green",
    value: "#2b771d",
  },
  {
    name: "Blue",
    value: "#1d2477",
  },
  {
    name: "Violet",
    value: "#4c1d77",
  },
  {
    name: "Black",
    value: "#292929",
  },
  {
    name: "Yellow",
    value: "#76771d",
  },
];
const Assignment2 = () => {
  const [color, setColor] = useState("");

  return (
    <div style={{ background: color }}>
      <div className="flex h-screen justify-center items-end mb-10">
        <div className="flex shadow-lg shadow-gray-600 w-auto h-auto p-4 rounded-md gap-4">
          {colors.map((b) => {
            return (
              <button
                key={b.value}
                onClick={() => {
                  const res = setColor(b.value);
                  console.log(res);
                }}
                className="w-20 p-2 text-white rounded-lg"
                style={{
                  background: b.value,
                }}
              >
                {b.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Assignment2;
