import React, { useState } from "react";
import { sendFeedback } from "../services/feedback";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await sendFeedback({ name: name || null, rating, message });
      setSuccess("Terima kasih atas feedback Anda!");
      setName("");
      setMessage("");
      setRating(0);
    } catch (err) {
      setError(err.message || "Gagal mengirim feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-200 py-16 px-4 sm:px-8 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        UMPAN BALIK
      </h2>
      <p className="text-black max-w-2xl mx-auto mb-10 leading-relaxed">
        Kami menghargai pendapat Anda. Berikan masukan atau saran untuk
        meningkatkan layanan SMKN 4 Bojonegoro.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-200 text-left space-y-6 px-2 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-black mb-2">Nama (Opsional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama..."
              className="w-full p-3 rounded-md border border-b-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-center md:text-left">
            <label className="block text-black mb-2">Rate kualitas</label>
            <div className="flex justify-center md:justify-start space-x-2">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                const filled = starValue <= (hover || rating);
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Beri rating ${starValue}`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                    className="cursor-pointer p-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill={filled ? "#ffc107" : "#000000"}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.897l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-black mb-2">Pesan</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan pesanmu..."
            rows="6"
            className="w-full p-3 rounded-md border border-b-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#08084C] text-white font-semibold w-full md:w-auto px-10 py-3 rounded-lg hover:bg-[#0b0d80] transition"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Kirim feedback"}
          </button>
        </div>

        {success && (
          <p className="text-center text-green-600 mt-3">{success}</p>
        )}
        {error && <p className="text-center text-red-600 mt-3">{error}</p>}

        <p className="text-center text-sm text-gray-700 mt-4">
          *Feedback anda akan menjadi pertimbangan kami pada pengembangan
          website ini ke depannya
        </p>
      </form>
    </section>
  );
};

export default Feedback;
