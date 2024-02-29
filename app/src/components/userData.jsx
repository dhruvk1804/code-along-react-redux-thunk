// UserData.jsx
import { useDispatch, useSelector } from "react-redux";
import { GOUserData } from "../actions/userActions";

export default function UserData(props) {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users);
  console.log(userData);

  const godata = () => {
    props.setState(!props.value);
    dispatch(GOUserData());
    

  };

  return (
    <div>
     {userData
  ? userData.map((user, index) => (
      <div style={{textAlign:"center"}} key={index}> 
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <hr></hr>
        </div>
      </div>
    ))
  : null}


        {
           props.value ?   <button  onClick={godata}>GO DATA</button>:null
        }

     

    </div>
  );
}