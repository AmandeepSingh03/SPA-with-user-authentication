
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner" style={{display:'flex', justifyContent:'center', height:'40px'}}>
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;