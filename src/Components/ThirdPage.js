import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const Third = () => {
  return (
    <div>
      <h3 className="title">How are you planning to use Eden?</h3>
      <p className="subtitle">
        We'll streamline your setup experience accordingly.
      </p>
      <div style={{ display: "flex" }}>
        <div className="myself">
          <PersonIcon className={"person"} />
          <p className="heading-1">For myself</p>
          <p className="para-1">
            Write better.Think more clearly.Stay organized.
          </p>
        </div>
        <div className="group">
          <GroupsIcon className={"groups"} />
          <p className="heading-1">With my team</p>
          <p className="para-1">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
