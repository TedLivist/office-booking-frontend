import React, { useState } from 'react';

const ItemForm = () => {
  const [ itemsInput, setItemsInput ] = useState({name: '', location: '', description: ''})
  const [ error, setError ] = useState('')

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className="row justify-content-center">
      <h1 className="mt-3 text-center">Add Item</h1>
      <div className="col-6">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="mb-3">
            <label htmlFor="name" name="name" className="form-label">Name</label>
            <input type="text" name="name" onChange={handleChange} value={itemsInput.name} placeholder="Enter item name" required className="form-control rounded-pill" id="name" aria-describedby="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input id="location" type="text" name="location" onChange={handleChange} value={itemsInput.location} placeholder="Enter item location" required className="form-control rounded-pill" />
            {/* {error.length > 2 ? <div id="errorHelp" className="form-text text-danger">{error}</div> : '' } */}
          </div>
          <div class="mb-3">
            <label htmlFor="formFile" class="form-label">Default file input example</label>
            <input class="form-control rounded-pill" required type="file" id="formFile" />
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">Description</label>
            <textarea class="form-control rounded" id="description" rows="7" required placeholder="Enter item description" value={itemsInput.description}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default ItemForm;