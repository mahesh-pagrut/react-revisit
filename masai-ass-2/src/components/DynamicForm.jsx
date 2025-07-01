import React, { useState } from "react";
import "../styles/form.css";


const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e, field) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const validate = () => {
    const newErrors = {};
    for (const field of schema) {
      const value = formData[field.name];

      if (field.required && (value === undefined || value === "" || value === false)) {
        newErrors[field.name] = `${field.label} is required`;
        continue;
      }

      if ((field.type === "text" || field.type === "email") && field.minLength && value?.length < field.minLength) {
        newErrors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
      }

      if (field.type === "number") {
        const num = Number(value);
        if (field.min && num < field.min) {
          newErrors[field.name] = `${field.label} must be at least ${field.min}`;
        }
        if (field.max && num > field.max) {
          newErrors[field.name] = `${field.label} must be less than ${field.max}`;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setErrors({});
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {schema.map((field) => (
        <div className="form-group" key={field.name}>
          <label>
            {field.label} {field.required && "*"}
          </label>

          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            >
              <option value="">Select</option>
              {field.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : field.type === "checkbox" ? (
            <input
              type="checkbox"
              name={field.name}
              checked={formData[field.name] || false}
              onChange={(e) => handleChange(e, field)}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}

          {errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>

      {submittedData && (
        <div className="result">
          <strong>Submitted Data:</strong>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default DynamicForm;
