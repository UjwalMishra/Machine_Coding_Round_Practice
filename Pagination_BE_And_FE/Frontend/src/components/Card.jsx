const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((val, idx) => {
        return (
          <div className="card" key={idx}>
            <div style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Name : </div>
              <div>{val.firstName}</div>
              <div>{val.lastName}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Username : </div>
              <div>{val.userName}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Email : </div>
              <div>{val.email}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
