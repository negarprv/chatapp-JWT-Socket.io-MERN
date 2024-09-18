const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="form-control">
        <label className="label gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-sm border-orange-500 checked:bg-orange-500"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-sm checked:bg-orange-500 border-orange-500"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
