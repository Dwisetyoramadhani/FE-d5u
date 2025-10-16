import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { checkGraduation } from "../services/graduation";

const CekKelulusan = () => {
  const [nisn, setNisn] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nisn) {
      alert("Harap masukkan NISN terlebih dahulu!");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await checkGraduation({ nisn });
      setResult(data.data ?? data);
    } catch (err) {
      setError(err.message || "Gagal memeriksa kelulusan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#eaf4f6] flex flex-col items-center justify-center px-4 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-[#e0ebef] p-2 rounded-full hover:bg-[#d3e2e6] transition"
      >
        <ArrowLeft className="w-5 h-5 text-[#0b0b3b]" />
      </button>

      <h1 className="text-3xl font-semibold text-[#0b0b3b] mb-8">Cek Kelulusan</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-transparent flex flex-col gap-4">
        <label htmlFor="nisn" className="text-[#0b0b3b] font-medium">NISN</label>
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
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Cek'}
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 bg-white p-6 rounded-md shadow-md w-full max-w-xl">
          <h2 className="font-semibold text-lg mb-2">Hasil Pencarian</h2>
          <pre className="text-sm text-gray-700">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CekKelulusan;
