import { useEffect, useState } from "react";
import { api as API } from "../../api"; // ✅ correct import    

export default function RentalHistory() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/bookings");
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const returnShoe = async (id) => {
    try {
      await API.post(`/bookings/return/${id}`);
      alert("Returned Successfully ✅");
      fetchHistory(); // refresh
    } catch (err) {
      alert("Error returning shoe");
    }
  };

  return (
    <div>
      <h2>Rental History</h2>

      {history.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        history.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0"
            }}
          >
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Status: {item.status}</p>

            {item.status !== "returned" && (
              <button onClick={() => returnShoe(item.id)}>
                Return Shoe
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}