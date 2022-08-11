const Second = () => {
  return (
    <div>
      <h3 className="title">Let's setup a home for all your work</h3>
      <p className="subtitle">You can always create another workspace later.</p>
      <label for="fullname" className="wname">
        Workspace Name
      </label>
      <br />
      <input for="fullname" placeholder="Eden"></input>
      <br />
      <label for="display" className="url">
        Workspace URL <span>(optional)</span>
      </label>
      <br />
      <input for="display" id="disp" placeholder="Example"></input>
      <div className="email">www.eden.com/</div>
      <br />
    </div>
  );
};

export default Second;
