import { useState } from 'react';
import './LoanForm.css';

export default function LoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    employed: false,
    salary: '',
    amount: '',
    purpose: '',
    duration: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Namn krävs';
    if (!formData.phone) newErrors.phone = 'Telefonnummer krävs';
    if (!formData.age) newErrors.age = 'Ålder krävs';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Ansökan:', formData);
      alert('Ansökan skickad! Se konsolen.');
    }
  };

  return (
    <div className="form-container">
      <h1>Låneansökan</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Telefonnummer:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Ålder:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span className="error">{errors.age}</span>}
        </label>

        <label className="checkbox">
          Är du anställd?
          <input type="checkbox" name="employed" checked={formData.employed} onChange={handleChange} />
        </label>

        <label>
          Din lön:
          <select name="salary" value={formData.salary} onChange={handleChange}>
            <option value="">Välj</option>
            <option value="<500">Mindre än $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-2000">$1000 - $2000</option>
            <option value=">2000">Över $2000</option>
          </select>
        </label>

        <label>
          Lånebelopp:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </label>

        <label>
          Syftet med lånet:
          <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} />
        </label>

        <label>
          Återbetalningstid i år:
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
        </label>

        <label>
          Kommentarer:
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
