function Hello() {
  let myName = "Rehat";
  let fullName = () => {
    return "Rehat Dhingra";
  };

  return <h3>Hello this is the future speaking {fullName()}</h3>;
}

export default Hello;
