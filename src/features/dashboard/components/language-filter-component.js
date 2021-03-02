import React, { useReducer } from "react";
import CustomInput from "../../../common/components/custom-input/custom-input";

const initialFilterState = {
  pageSize: 10,
  pageNumber: 1,
  fromDate: "",
  toDate: "",
};
const FILTER_TYPES = {
  PAGE_SIZE: "PAGE_SIZE",
  PAGE_NUMBER: "PAGE_NUMBER",
  FROM_DATE: "FROM_DATE",
  TO_DATE: "TO_DATE",
};

function languageFilterReducer(state, action) {
  switch (action.type) {
    case FILTER_TYPES.PAGE_SIZE:
      return { ...state, pageSize: action.value };
    case FILTER_TYPES.PAGE_NUMBER:
      return { ...state, pageNumber: action.value };
    case FILTER_TYPES.FROM_DATE:
      return { ...state, fromDate: action.value };
    case FILTER_TYPES.TO_DATE:
      return { ...state, toDate: action.value };
    default:
      throw new Error();
  }
}
const LanguageFilter = (props) => {
  const { handleSubmitClick } = props;
  const [filterState, handleFilterChange] = useReducer(
    languageFilterReducer,
    initialFilterState
  );

  return (
    <div className="language-filter-component">
      <CustomInput
        label={"From"}
        type={"date"}
        onChange={(event) =>
          handleFilterChange({
            type: FILTER_TYPES.FROM_DATE,
            value: event.target.value,
          })
        }
      />
      <CustomInput
        label={"To"}
        type={"date"}
        onChange={(event) =>
          handleFilterChange({
            type: FILTER_TYPES.TO_DATE,
            value: event.target.value,
          })
        }
      />
      <CustomInput
        label={"Page Size"}
        type={"number"}
        maxLength={2}
        onChange={(event) =>
          handleFilterChange({
            type: FILTER_TYPES.PAGE_SIZE,
            value: event.target.value,
          })
        }
      />
      <CustomInput
        label={"Page Number"}
        type={"number"}
        onChange={(event) =>
          handleFilterChange({
            type: FILTER_TYPES.PAGE_NUMBER,
            value: event.target.value,
          })
        }
      />
      <button
        className="apply-btn"
        onClick={() => handleSubmitClick(filterState)}
      >
        Submit
      </button>
    </div>
  );
};

export default LanguageFilter;
