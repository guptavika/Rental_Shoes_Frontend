import { useEffect, useState } from "react";
import { api as API } from "../../api";

export default function ShoeList() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await API.get("/shoes");
        setShoes(res.data);
      } catch (err) {
        console.log("Shoes fetch error:", err);
      }
    };

    fetchShoes();
  }, []);

  const addToCart = async (shoe_id) => {
    try {
      const token = localStorage.getItem("token"); // ✅ token lo

      if (!token) {
        alert("Pehle login karo!");
        return;
      }

      await API.post(
        "/cart",
        { shoe_id }, // ✅ sirf shoe_id bhejo
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ token header mein
          },
        }
      );

      alert("Cart mein add ho gaya! ✅");
    } catch (err) {
      console.log("Add to cart error:", err);
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <img
            src={`http://localhost:5000/uploads/${shoe.image}`}
            alt={shoe.name}
            width={150}
          />
          <h3>{shoe.name}</h3>
          <p>Brand: {shoe.brand}</p>
          <p>Price: ₹{shoe.price}</p>
          <button onClick={() => addToCart(shoe.id)}>
            Add to Cart 🛒
          </button>
        </div>
      ))}
    </div>
  );
}