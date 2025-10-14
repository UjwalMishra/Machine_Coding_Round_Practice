import { useRef, useState } from "react";

const Notes = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const dragItem = useRef();
  const dragSourceContainer = useRef();

  // step - 1
  const handleDragStart = (e, item, container) => {
    // imp
    dragItem.current = item;
    dragSourceContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  // step - 2
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  // step - 3 --> whole logic
  const handleOnDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragSourceContainer.current;

    setData((prev) => {
      const newData = { ...prev };
      //remove item from source-container
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      //add item to target-container
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  // step - 4
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      {/* step - 1 */}
      {Object.keys(data).map((container, index) => {
        return (
          <div
            onDrop={(e) => handleOnDrop(e, container)}
            onDragOver={handleDragOver}
            key={index}
            className="parent-container"
          >
            <h3> {container}</h3>

            <div>
              {data[container].map((item, idx) => {
                return (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, container)}
                    onDragEnd={handleDragEnd}
                    className="child-container"
                    key={idx}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
