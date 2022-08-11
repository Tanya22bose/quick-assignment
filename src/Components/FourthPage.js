import DoneIcon from "@mui/icons-material/Done";

const Fourth = () => {
  return (
    <div>
      <div className="circle-check">
        <DoneIcon className="check" />
      </div>
      <h3 className="title">Congratulations, Eren!</h3>
      <p className="subtitle">
        You have completed onboarding, you can start using the Eden!
      </p>
    </div>
  );
};

export default Fourth;
