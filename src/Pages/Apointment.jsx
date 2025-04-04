import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Appointment() {
  const { intid } = useParams();
  const { interviewer = [] } = useContext(AppContext);
  const [info, setInterInfo] = useState(null);

  const [slot,setSlot]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlottime]=useState("")

  const getavaliableslot= async()=>{
    
  }

  useEffect(() => {
    if (interviewer?.length > 0) {
      const interviewersInfo = interviewer.find((item) => item.id === parseInt(intid));
      setInterInfo(interviewersInfo);
    }
  }, [interviewer, intid]);

  useEffect(() => {
    console.log(info);
  }, [info]);

  useEffect(()=>{
    getavaliableslot()
  },[info])

  return (
    <div>
      {info ? ( // Check if info is not null before accessing properties
        <div>
          <div>
            <img src={info.image} alt={info.name || "Interviewer Image"} />
          </div>
          <div>
            <p>{info.name}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 90 90">
              <g transform="scale(1)">
                <path d="M49.66 1.125c4.67-2.393 10.394-.859 13.243 3.548 1.784 2.761 4.788 4.495 8.071 4.66 5.241.263 9.431 4.453 9.694 9.694.165 3.283 1.899 6.286 4.66 8.071 4.407 2.848 5.941 8.572 3.548 13.242-1.499 2.926-1.499 6.394 0 9.319 2.393 4.67.859 10.394-3.548 13.242-2.761 1.784-4.495 4.788-4.66 8.071-.263 5.241-4.453 9.431-9.694 9.694-3.283.165-6.286 1.899-8.071 4.66-2.848 4.407-8.572 5.941-13.242 3.548-2.926-1.499-6.394-1.499-9.319 0-4.67 2.393-10.394.859-13.242-3.548-1.784-2.761-4.788-4.495-8.071-4.66-5.241-.263-9.431-4.453-9.694-9.694-.165-3.283-1.899-6.286-4.66-8.071C.266 60.054-1.267 54.33 1.125 49.66c1.499-2.926 1.499-6.394 0-9.319-2.393-4.67-.859-10.394 3.548-13.242 2.761-1.784 4.495-4.788 4.66-8.071.263-5.241 4.453-9.431 9.694-9.694 3.283-.165 6.286-1.899 8.071-4.66 2.848-4.407 8.572-5.941 13.242-3.548 2.926 1.499 6.394 1.499 9.319 0z" fill="#0083f9" />
                <polygon points="36.94,66.3 36.94,46.9 62.8,35.34 72.5,45.04" fill="#0077e3" />
                <polygon points="36.94,66.3 17.5,46.87 27.2,37.16 36.94,46.9 60.11,23.7 69.81,33.39" fill="#fff" />
              </g>
            </svg>
            </p>
            <div>
              <p>{info.Speciality}</p>
              <button>{info.experience} Year</button>
            </div>
            <div>
              <p>About <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 90 90">
                <g transform="scale(0.5)">
                  <path d="M37.267 41.251c-.249 1.047.268 2.116 1.233 2.594 1.543.765 2.511 2.474 2.213 4.305l-2.516 15.471c-.306 1.88.97 3.652 2.85 3.958h0c2.783.453 5.627.25 8.308-.583.771-.24 1.354-.879 1.541-1.664l.427-1.801c.249-1.047-.268-2.116-1.233-2.594-1.543-.765-2.511-2.474-2.213-4.305l2.516-15.471c.306-1.88-.97-3.652-2.85-3.958h0c-2.783-.453-5.627-.25-8.308.583-.771.24-1.354.879-1.541 1.664l-.427 1.801z" fill="#000" />
                  <circle cx="47.093" cy="27.893" r="5.703" fill="#000" />
                  <path d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45zm0-82.902C24.101 7.098 7.098 24.101 7.098 45S24.101 82.902 45 82.902 82.902 65.899 82.902 45 65.899 7.098 45 7.098z" fill="#000" />
                </g>
              </svg>
              </p>
              <p>{info.about}</p>
            </div>
            <p>Appointment Fee : $50 </p>
          </div>
        </div>
      ) : (
        <p>Loading interviewer details...</p>
      )}
    </div>
  );
}

export default Appointment;
