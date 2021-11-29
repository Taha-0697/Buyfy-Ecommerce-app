import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadProduct } from "../Redux/products/productsActions";

const Test = ({ uploadProduct }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleonsubmit = (e) => {
    e.preventDefault();
    const products = {
      category,
      title,
      cost,
      description,
      quantity,
      coverPhoto,
    };
    // console.log(products);
    uploadProduct(products);
  };

  return (
    <div>
      <h1>Test</h1>
      <form onSubmit={handleonsubmit}>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <br />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
        <br />
        <input
          type="text"
          placeholder="Cost"
          onChange={(e) => setCost(e.target.value)}
          value={cost}
        />
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <br />
        <input
          type="file"
          placeholder="Cover Photo"
          onChange={(e) => setCoverPhoto(e.target.files[0])}
          defaultValue={coverPhoto}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const actions = {
  uploadProduct,
};

export default connect(null, actions)(Test);
