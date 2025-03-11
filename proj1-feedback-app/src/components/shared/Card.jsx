const Card = ({ children, reverse }) => {
  return (
    <div
      className={`card`}
      style={{
        background: reverse ? "rgba(0,0,0,0.4" : "#fff",
        color: reverse ? "#fff" : "#333",
      }}>
      {children}
      <div>test</div>
    </div>
  );
};

export default Card;
