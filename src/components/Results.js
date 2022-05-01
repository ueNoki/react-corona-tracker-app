//Results.js

const Results = (props) => {
  console.log("Resultのprops", props)
  return (
    <div>
      <p>日付: {props.countryData.date.slice(0,10)}</p>
      <p>新規感染者: {props.countryData.newConfirmed}</p>
      <p>感染者総数: {props.countryData.totalConfirmed}</p>
      <p>新規回復者: {props.countryData.date.newRecovered}</p>
      <p>回復者総数: {props.countryData.date.totalRecovered}</p>
    </div>
  );
};

export default Results;
