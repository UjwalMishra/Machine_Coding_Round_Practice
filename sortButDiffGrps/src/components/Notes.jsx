import { useRef, useState } from "react";

const Notes = ({ todos }) => {
  const [data, setData] = useState(todos);

  const sourceContainer = useRef();
  const dragItem = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    sourceContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDrop = (e, container) => {
    e.preventDefault();
    const target = container;
    const item = dragItem.current;
    const source = sourceContainer.current;

    setData((prev) => {
      const updatedData = { ...prev };

      //remove item from source
      updatedData[source] = updatedData[source].filter((i) => i !== item);

      //add at source
      updatedData[target] = [...updatedData[target], item];

      return updatedData;
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Object.keys(data).map((container, idx) => {
          return (
            <div
              style={{ border: "1px solid black", padding: "10px" }}
              key={idx}
              onDrop={(e) => handleDrop(e, container)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
            >
              <h2 style={{ textAlign: "center" }}> {container}</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {data[container].map((item, idx) => {
                  return (
                    <div
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, container)}
                      onDragEnd={(e) => (e.target.style.opacity = "1")}
                      style={{
                        border: "1px solid black",
                        padding: "0px 10px",
                        backgroundColor: "orange",
                        cursor: "grab",
                      }}
                      key={idx}
                    >
                      <ul>
                        <li>
                          <div>{item}</div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
