import { useEffect, useState } from "react";
import { api as API } from "../../api";

export default function ShoeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await API.get("/shoes");
        setData(res.data);
      } catch (err) {
        console.log("Error fetching shoes:", err);
      }
    };

    fetchShoes();
  }, []);

  const add = async (id) => {
    try {
      await API.post("/cart", { shoe_id: id }); // ✅ quantity hata diya
      alert("Added to Cart ✅");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || "Something went wrong");
      console.log(err);
    }
  };

  return (
    <div>
      {data.map((s) => (
        <div key={s.id}>
          {s.name} ₹{s.price}
          <button onClick={() => add(s.id)}>Add to Cart 🛒</button>
        </div>
      ))}
    </div>
  );
}