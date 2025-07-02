import { useState } from "react";

function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { month: "long" };
  const month = date.toLocaleString("en-US", options);
  const day = date.getDate();
  const year = date.getFullYear();

  // Helper to get ordinal suffix
  function ordinal(n) {
    if (n > 3 && n < 21) return n + "th";
    switch (n % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
      default:
        return n + "th";
    }
  }

  return `${month} ${ordinal(day)} ${year}`;
  // Example usage:
  // const formatted = formatDate("2025-06-17T09:36:19.790Z");
  // console.log(formatted); // "June 17th 2025"
}
const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
  createdAt: formatDate(new Date().toISOString()),
  status: "inactive",
  agreed: false,
};

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);
  const [agreed, setAgreed] = useState(false);
  const resetForm = () => {
    setForm(DEFAULT_DATA);
    setAgreed(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const submitForm = () => {
    if (!agreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    onFormSubmit({ ...form, agreed });
  };

  return (
    <div className="resource-form">
      <h1 className="title">Add New Resource</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              name="title"
              type="text"
              value={form.title}
              onChange={handleInputChange}
              placeholder="Learn NextJS and React"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Learn these technologies because they are popular, and enable better SEO"
            ></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              name="link"
              type="text"
              value={form.link}
              onChange={handleInputChange}
              placeholder="input link to the course resource"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                name="priority"
                value={form.priority}
                onChange={handleInputChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              className="input"
              name="timeToFinish"
              type="number"
              value={form.timeToFinish}
              onChange={handleInputChange}
              placeholder="60 (Time is in minutes)"
            />
          </div>
          <p className="help">Time is in minutes</p>
        </div>
        <div className="field">
          <label className="label">Created At:</label>
          <div className="control">
            <input
              className="input"
              name="createdAt"
              type="text"
              value={form.createdAt}
              onChange={handleInputChange}
              placeholder={new Date().toISOString()}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Status</label>
          <div className="control">
            <input
              className="input"
              name="status"
              type="text"
              value={form.status}
              onChange={handleInputChange}
              placeholder="inactive"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              I agree to the
              <a href="#"> terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              onClick={resetForm}
              className="button is-link is-light"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
