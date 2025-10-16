import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Terima kasih atas feedback Anda!\nNama: ${name}\nRating: ${rating}\nPesan: ${message}`
    );
    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <section className="bg-gray-200 py-16 px-6 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        UMPAN BALIK
      </h2>
      <p className="text-black max-w-2xl mx-auto mb-10 leading-relaxed">
        Kami sangat menghargai pendapat Anda. Silakan berikan masukan, saran,
        atau kritik yang membangun untuk membantu kami meningkatkan kualitas
        layanan SMKN 4 Bojonegoro.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-200 text-left space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-black mb-2">Nama (Opsional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama....."
              className="w-full p-3 rounded-md border border-b-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-center md:text-left">
            <label className="block text-black mb-2">Rate kualitas</label>
            <div className="flex justify-center md:justify-start space-x-2">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={30}
                    className="cursor-pointer transition"
                    color={
                      starValue <= (hover || rating) ? "#ffc107" : "#000000"
                    }
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                  />
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
          >
            Kirim feedback
          </button>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4">
          *Feedback anda akan menjadi pertimbangan kami pada pengembangan
          website ini ke depannya
        </p>
      </form>
    </section>
  );
};

export default Feedback;
