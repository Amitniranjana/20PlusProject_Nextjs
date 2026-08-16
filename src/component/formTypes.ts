export type FormData = {
  profile: {
    name: string;
    age: string;
    gender: string;
  };
  intrests: {
    intrestData: string[];
    checkboxes: string[];
  };
  setting: {
    settingData: string;
    data: string[];
  };
};
