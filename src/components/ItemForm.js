/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const ItemForm = () => {
  const [itemsInput, setItemsInput] = useState({
    name: '', location: '', image: '', description: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setItemsInput({ ...itemsInput, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setItemsInput({ ...itemsInput, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemsInput.name.trim() && itemsInput.location.trim() && itemsInput.description.trim()) {
      // const { name, location, image, description } = itemsInput
      setItemsInput({
        name: '', location: '', image: '', description: '',
      });
    } else {
      setError('All fields must be filled');
    }
  };

  return (
    <div className="row justify-content-center">
      <h1 className="mt-3 text-center">Add Item</h1>
      <div className="col-6">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="mb-3">
            {error.length > 2 ? <div id="errorHelp" className="form-text text-danger">{error}</div> : '' }
            <label htmlFor="name" name="name" className="form-label">Name</label>
            <input type="text" name="name" onChange={handleChange} value={itemsInput.name} placeholder="Enter item name" required className="form-control border border-info rounded-pill" id="name" aria-describedby="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input id="location" type="text" name="location" onChange={handleChange} value={itemsInput.location} placeholder="Enter item location" required className="form-control border border-info rounded-pill" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Upload Image</label>
            <input className="form-control rounded-pill border border-info" onChange={handleImage} required type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea name="description" className="form-control rounded border border-info" id="description" rows="7" onChange={handleChange} required placeholder="Enter item description" value={itemsInput.description} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
