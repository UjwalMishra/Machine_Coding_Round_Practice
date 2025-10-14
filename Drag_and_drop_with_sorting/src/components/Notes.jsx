import { useRef, useState } from "react";

const Notes = ({ notes }) => {
  const [data, setData] = useState(notes);

  const sourceIndex = useRef();
  const targetIndex = useRef();

  // step - 2
  const handleDragStart = (e, index) => {
    // imp
    sourceIndex.current = index;
    e.target.style.opacity = "0.5";
  };

  //  step - 3
  const handleDragEnter = (e, index) => {
    // imp
    targetIndex.current = index;
    e.target.style.backgroundColor = "red";
  };

  // step - 4
  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = "orange";
  };

  // step - 5 --> whole logic here
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    e.target.style.backgroundColor = "orange";

    //updating order
    const newData = [...data];
    const item = newData[sourceIndex.current];

    //remove item from its source index
    newData.splice(sourceIndex.current, 1);

    //inserting item at targetIndex or destinationIndex
    newData.splice(targetIndex.current, 0, item);

    setData(newData);

    sourceIndex.current = null;
    targetIndex.current = null;
  };

  // step - 6
  const handleOnDrop = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "orange";
  };

  return (
    <div className="container">
      <div className="notes-parent">
        <h2 style={{ textAlign: "center" }}>Notes</h2>
        <div>
          {/* step : 1 */}
          {data.map((val, index) => {
            return (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={handleOnDrop}
                onDragOver={(e) => e.preventDefault()}
                className="note-container"
                key={val.id}
              >
                {val.data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
