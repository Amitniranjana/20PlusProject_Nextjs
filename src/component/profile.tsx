export default function Profile({ data, setData }) {
  const { name, age, gender } = data;
  const arr = ["name", "age", "gender"];
  const handleData = (e) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [e.target.name]: e.target.value },
    }));
  };
  return (
    <div>
      Profile
      <div className="profileFields">
        {arr.map((val, idx) => (
          <div key={idx}>
            <label htmlFor={val}>{val} : </label>
            <input
              type={val === "name" ? "text" : "number"}
              name={val}
              value={data[val]}
              onChange={handleData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
