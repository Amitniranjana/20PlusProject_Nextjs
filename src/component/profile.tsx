import type { FormData } from "./formTypes";

type ProfileProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Profile({ data, setData }: ProfileProps) {
  const arr = ["name", "age", "gender"] as const;

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof FormData["profile"];

    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [fieldName]: e.target.value },
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
              value={data.profile[val]}
              onChange={handleData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
