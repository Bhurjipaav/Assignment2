import React from "react";
 export default function Form () {
    return(
        <form>
      
        <label htmlFor="new-from-input" className="label__lg">
          Name
        </label>
      <br></br>
      <input
        type="text"
        id="name"
        className="input input__lg"
        name="text"
        autoComplete="on"
      /> <br></br>
      <label htmlFor="new-form-input" className="label__lg">
          Roll Number
        </label><br></br>
      <input
        type="text"
        id="RN"
        className="input input__lg"
        name="text"
        autoComplete="on"
      /> <br></br>
      <button type="submit" className="btn btn__primary btn__lg">
        submit
      </button>
    </form>
    )
 }