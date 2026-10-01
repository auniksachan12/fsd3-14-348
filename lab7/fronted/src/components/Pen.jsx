const Pen = (props) => {
  const { picUrl, company, price } = props.pen;

  return (
    <div>
      <img src={picUrl} alt={company} />
      <h2>{company}</h2>
      <h3>Rs. {price}</h3>
    </div>
  );
};

export default Pen;
