import React from 'react';
import cardImg from '../assets/images.png';
import gallery1 from '../assets/foto-lulusan.png';
import GpImage from '../assets/headgp.jpg'
import gallery2 from '../assets/LogoJagoan.png';
import logoATR from '../assets/logoatr.jpeg';
const AtrPage = () => {
    return (
        <div className="bg-white text-green-800">
            <section className="relative min-h-screen bg-white overflow-hidden">

            <div className="container mx-auto px-4 py-1">
                <div className="relative">
                {/* Gambar Hero */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 relative">
                    <img
                    src={GpImage}
                    alt="Group Photo"
                    className="w-full h-auto object-cover"
                    />
                    {/* Ukur tinggi gambar secara eksplisit agar shape bisa mengikuti */}
                    <div className="h-0 invisible">.</div>
                </div>
                {/* Shape Putih di Sisi Kiri, tinggi mengikuti gambar */}
                <div
                className="absolute top-130 left-0 w-screen transform scale-x-[-1]" 
                style={{
                    height: 'calc(100% - 32px)', 
                }}
                >
                <div
                    className="w-full h-1/2 bg-white"
                    style={{
                    clipPath: 'polygon(10% 100%, 100% 0, 100% 100%, 0 100%)',
                    }}
                ></div>
                </div>


                {/* Shape Biru di Sisi Kanan, tinggi mengikuti gambar */}
                <div
                    className="hidden sm:block absolute top-0 right-0 w-1/3"
                    style={{
                        height: 'calc(100% - 32px)',
                    }}
                    >
                    <div
                        className="w-full h-full text-white bg-gradient-to-r from-green-400 to-green-800"
                        style={{
                        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
                        }}
                    ></div>
                </div>
                

                <div className="absolute inset-0 flex items-center justify-center md:justify-end px-4">
                    <div className="text-center md:text-right max-w-[90%] md:max-w-[60%] lg:max-w-[50%] z-10">
                    <h1
                        className="text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg"
                        style={{
                        WebkitTextStroke: '1px #008000',
                        }}
                    >
                        AGRIBISNIS<br />
                        TERNAK RUMINANSIA
                    </h1>
                    </div>
                </div>

                {/* Info bawah */}
                <div className="mt-8 flex items-center gap-2">
                    <img src={logoATR} alt="Logo SMK" className="w-10 h-10" />
                    <div>
                    <p className="text-xs text-green-600">SMK</p>
                    <p className="text-sm font-semibold">Agribisnis Ternak Ruminansia</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Tentang RPL */}
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 tracking-wide">Tentang</h2>
                        <p className="text-3xl sm:text-4xl font-extrabold text-green-500">ATR</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="relative h-40">
                                <img src={cardImg} alt="Kompetensi" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg">Kompetensi yang Dipelajari</h3>
                                <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-green-700">
                                    <li>Dasar-dasar peternakan ruminansia</li>
                                    <li>Teknik pemeliharaan sapi, kambing, dan domba</li>
                                    <li>Perkawinan, reproduksi, dan kesehatan ternak</li>
                                    <li>Manajemen pakan dan nutrisi ternak</li>
                                    <li>Pengolahan hasil ternak (susu, daging, pupuk organik)</li>
                                    <li>Manajemen usaha dan pemasaran produk peternakan</li>
                                    <li>Biosekuriti dan keselamatan kerja bidang peternakan</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="relative h-40">
                                <img src={cardImg} alt="Profil Jurusan" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg">Profil Jurusan</h3>
                                <p className="mt-3 text-sm text-green-700">
                                    Jurusan Agribisnis Ternak Ruminansia (ATR) SMKN 4 Bojonegoro adalah program keahlian yang fokus pada pengelolaan usaha peternakan hewan ruminansia, seperti sapi, kambing, dan domba. 

                                    Siswa dilatih untuk menguasai keterampilan teknis, manajerial, serta kewirausahaan di bidang peternakan dengan tetap memperhatikan aspek kesejahteraan hewan dan lingkungan.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="relative h-40">
                                <img src={cardImg} alt="Fasilitas" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg">Fasilitas Jurusan</h3>
                                <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-green-700">
                                    <li>Kandang praktik ternak sapi, kambing, dan domba</li>
                                    <li>Lahan hijauan pakan ternak</li>
                                    <li>Laboratorium reproduksi dan kesehatan hewan</li>
                                    <li>Peralatan inseminasi buatan (IB)</li>
                                    <li>Program praktik kerja lapangan di peternakan mitra</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Potret Kegiatan */}
            <section className="relative pb-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-green-700">Potret Kegiatan</h2>
                        <div className="hidden sm:block w-40 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-tl-2xl" />
                    </div>
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery1} alt="Kegiatan 1" className="w-full h-48 object-cover" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery1} alt="Kegiatan 2" className="w-full h-48 object-cover" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery1} alt="Kegiatan 3" className="w-full h-48 object-cover" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery2} alt="Kegiatan 4" className="w-full h-48 object-cover" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery2} alt="Kegiatan 5" className="w-full h-48 object-cover" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={gallery1} alt="Kegiatan 6" className="w-full h-48 object-cover" />
                        </div>
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default AtrPage;

