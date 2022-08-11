const First = () => {
  return (
    <div>
      <h3 className="title">Welcome! First things first..</h3>
      <p className="subtitle">You can always change them later.</p>
      <label for="fullname" className="fname">
        Full Name
      </label>
      <br />
      <input for="fullname" placeholder="Full Name"></input>
      <br />
      <label for="display" className="display">
        Display Name
      </label>
      <br />
      <input for="display" placeholder="Display Name"></input>
      <br />
    </div>
  );
};

export default First;
