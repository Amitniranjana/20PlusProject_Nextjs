import type { FormData } from "./formTypes";

type InterestProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Interest({ data, setData }: InterestProps) {
  const dataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      intrests: {
        ...prev.intrests,
        intrestData: e.target.checked
          ? [...prev.intrests.intrestData, e.target.value]
          : prev.intrests.intrestData.filter((item) => item !== e.target.value),
      },
    }));
  };

  return (
    <div>
      {data.intrests.checkboxes.map((val, idx) => (
        <div key={idx}>
          <label>
            <input type="checkbox" value={val} onChange={dataHandler} />
            <span>{val}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
