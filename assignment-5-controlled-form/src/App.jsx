import { useState } from "react";
import "./App.css";

function App() {
  // One state object holds all form values (controlled inputs)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "MCA",
    message: "",
  });

  // One handler for every field – uses the input's "name" attribute
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted for " + (formData.name || "unknown user"));
  };

  return (
    <main className="app">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Controlled Form</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <label htmlFor="course">Course</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
          <option value="BCA">BCA</option>
          <option value="BTech">B.Tech</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write something..."
        />

        <button type="submit">Submit</button>
      </form>

      {/* Real-time display of the entered data */}
      <section className="card preview">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Course:</strong> {formData.course}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </section>
    </main>
  );
}

export default App;
