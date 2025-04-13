import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
}
