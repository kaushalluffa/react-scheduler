import {
  Bookmark,
  Check,
  Close,
  Delete,
  DragHandle,
  Schedule,
  Segment
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import './DialogBox.scss'
const labelsClasses = [
  "#C47335",
  "#8D909B",
  "#3E442B",
  "#2660A4",
  "#BD1E1E",
  "#ACACE6",
];
const DialogBox = () => {
  const { setShowEventModal, daySelected, dispatch, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? selectedEvent.label : labelsClasses[0]
  );
  const names = ["Ankur", "Nathan", "Brandon", "Bahareh"];
  const [name, setName] = useState(selectedEvent?selectedEvent.intervieweeName:'Ankur')
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      intervieweeName:name,
    };

    if (selectedEvent) {
      dispatch({ type: "update", payload: event });
    } else {
      dispatch({ type: "push", payload: event });
    }
    setShowEventModal(false);
  };
  return (
    <div className="dialogBox">
      <form className="form">
        <header className="form__header">
          <span style={{ color: "gray" }}>
            <DragHandle />
          </span>
          <div>
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatch({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <Delete />
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span style={{ color: "gray" }}>
                <Close />
              </span>
            </button>
          </div>
        </header>
        <div className="form__container">
          <div className="form__group">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="form__title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span style={{ color: "gray" }}>
              <Schedule />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span style={{ color: "gray" }}>
              <Segment />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="form__description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span style={{ color: "gray" }}>
              <PersonIcon />
            </span>
            <select
              type="text"
              name="options"
              required
              className="form__options"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              {names.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
            <span style={{ color: "gray" }}>
              <Bookmark />
            </span>
            <div className="form__labels">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className='label'
                  style={{backgroundColor:`${lblClass}`}}
                >
                  {selectedLabel === lblClass && (
                    <span style={{color:'white',fontSize:'0.875rem', lineHeight:'1.25rem'}}>
                      <Check />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="form__footer">
          <button
            type="submit"
            onClick={handleSubmit}
            className="form__btn"
          >
            {selectedEvent ? "Update" : "Add"}
          </button>
        </footer>
      </form>
    </div>
  );
};

export default DialogBox;
