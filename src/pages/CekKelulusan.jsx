import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CekKelulusan = () => {
  const [nisn, setNisn] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nisn) {
      alert("Harap masukkan NISN terlebih dahulu!");
      return;
    }
    alert(`Mengecek kelulusan untuk NISN: ${nisn}`);
  };

  return (
    <div className="min-h-screen bg-[#eaf4f6] flex flex-col items-center justify-center px-4 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-[#e0ebef] p-2 rounded-full hover:bg-[#d3e2e6] transition"
      >
        <ArrowLeft className="w-5 h-5 text-[#0b0b3b]" />
      </button>

      <h1 className="text-3xl font-semibold text-[#0b0b3b] mb-8">
        Cek Kelulusan
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-transparent flex flex-col gap-4"
      >
        <label htmlFor="nisn" className="text-[#0b0b3b] font-medium">
          NISN
        </label>
        <input
          type="text"
          id="nisn"
          value={nisn}
          onChange={(e) => setNisn(e.target.value)}
          placeholder="Masukkan NISN..."
          className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#0b0b3b] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1d1d6b] transition"
          >
            Cek
          </button>
        </div>
      </form>
    </div>
  );
};

export default CekKelulusan;
