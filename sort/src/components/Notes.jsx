import { useRef, useState } from "react";

const Notes = ({ notes }) => {
  const [data, setData] = useState(notes);

  const sourceIdx = useRef();
  const targetIdx = useRef();

  const handleDragStart = (e, idx) => {
    sourceIdx.current = idx;
    e.target.style.opacity = "0.1";
  };

  const handleDragEnter = (e, idx) => {
    targetIdx.current = idx;
    e.target.style.opacity = "0.1";
  };

  const handleDragEnd = (e, idx) => {
    e.target.style.opacity = "1";
    const arr = [...data];

    const item = arr[sourceIdx.current];
    //remove item
    arr.splice(sourceIdx.current, 1);

    //enter item
    arr.splice(targetIdx.current, 0, item);

    //set new data
    setData(arr);

    sourceIdx.current = null;
    targetIdx.current = null;
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "30px" }}>
        TODOS
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "300px",
            border: "1px solid black",
            fontSize: "30px",
          }}
        >
          {data.map((val, idx) => {
            return (
              <div key={idx}>
                <ul
                  style={{
                    border: "1px solid black",
                    backgroundColor: "orange",
                    cursor: "grab",
                  }}
                >
                  <li>
                    <div
                      draggable
                      onDragStart={(e) => {
                        handleDragStart(e, idx);
                      }}
                      onDragEnter={(e) => handleDragEnter(e, idx)}
                      onDragLeave={(e) => {
                        e.target.style.opacity = "1";
                      }}
                      onDragEnd={(e) => handleDragEnd(e, idx)}
                    >
                      {val.task}
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
