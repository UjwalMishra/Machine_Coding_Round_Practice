import { useState } from "react";

const FileExplorer = ({ fileData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="container">
        <h3 style={{ marginLeft: "8px", cursor: "pointer" }}>
          {fileData.type === "folder" ? (isOpen ? "📂" : "📁") : "🗄️"}
          <span onClick={toggleHandler} style={{ marginLeft: "5px" }}>
            {" "}
            {fileData.name}
          </span>
          <div>
            {isOpen &&
              fileData?.children?.map((val, idx) => {
                return <FileExplorer key={idx} fileData={val} />;
              })}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default FileExplorer;
