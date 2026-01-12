import { useState } from 'react';
import { ShoppingCart, FileText, Users, CheckCircle, Clock, Package, Download, Printer, ChevronRight, Menu, X, Home, ClipboardList } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'proses', label: 'Proses Pengajuan', icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-[#0A1D37] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-[#D4A017]" />
              <div>
                <h1 className="text-lg font-bold">LPPK IIB Yogyakarta</h1>
                <p className="text-xs text-gray-300">Sistem Belanja Barang</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-[#D4A017] text-[#0A1D37] font-semibold'
                      : 'hover:bg-[#1a2d47]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-[#D4A017] text-[#0A1D37] font-semibold'
                      : 'hover:bg-[#1a2d47]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' ? <HomePage setCurrentPage={setCurrentPage} /> : <ProsesPage />}

      {/* Footer */}
      <footer className="bg-[#0A1D37] text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2026 Lembaga Pemasyarakatan Perempuan Kelas IIB Yogyakarta</p>
          <p className="text-xs text-gray-400 mt-2">Kementerian Hukum dan HAM Republik Indonesia</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: CheckCircle,
      title: 'Tertib & Transparan',
      description: 'Setiap tahap belanja barang tercatat dengan jelas dan dapat dipertanggungjawabkan',
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      title: 'Sesuai Anggaran',
      description: 'Sistem memastikan belanja sesuai dengan POK dan ketersediaan anggaran',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Alur Kerja Jelas',
      description: 'Melibatkan berbagai pihak dengan tugas dan tanggung jawab yang terdefinisi',
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      title: 'Proses Efisien',
      description: 'Mempercepat proses pengajuan hingga penerimaan barang dengan sistem yang terstruktur',
      color: 'bg-orange-500',
    },
  ];

  const pihakTerlibat = [
    { nama: 'Unit Subsi Pengusul', peran: 'Mengajukan kebutuhan barang' },
    { nama: 'Kasubag Tata Usaha', peran: 'Verifikasi usulan dan anggaran' },
    { nama: 'PPK', peran: 'Menentukan metode belanja' },
    { nama: 'KPA', peran: 'Memberikan persetujuan akhir' },
    { nama: 'Tim Pengadaan', peran: 'Melaksanakan pembelian' },
    { nama: 'Kepala Urusan Umum', peran: 'Penerimaan dan distribusi' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0A1D37] via-[#1a2d47] to-[#0A1D37] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <ShoppingCart className="w-20 h-20 text-[#D4A017] animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sistem Belanja Barang
            </h1>
            <p className="text-xl md:text-2xl text-[#D4A017] font-semibold mb-6">
              Lembaga Pemasyarakatan Perempuan Kelas IIB Yogyakarta
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Platform digital untuk mengelola proses belanja barang secara tertib, transparan, dan akuntabel sesuai dengan Standar Operasional Prosedur yang berlaku
            </p>
            <button
              onClick={() => setCurrentPage('proses')}
              className="bg-[#D4A017] text-[#0A1D37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Lihat Proses Pengajuan</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Tujuan Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1D37] mb-4">
            Tujuan Sistem
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#D4A017]"
            >
              <div className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1D37] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pihak Terlibat Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1D37] mb-4">
              Pihak yang Terlibat
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses belanja barang melibatkan berbagai pihak dengan peran dan tanggung jawab yang jelas untuk memastikan transparansi dan akuntabilitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pihakTerlibat.map((pihak, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0A1D37] to-[#1a2d47] text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-[#D4A017] text-[#0A1D37] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#D4A017]">
                      {pihak.nama}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {pihak.peran}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitur Dokumen Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#D4A017] to-yellow-600 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fitur Dokumen Digital
              </h2>
              <p className="text-lg mb-6 text-yellow-50">
                Mendukung kebutuhan administrasi dan dokumentasi dengan fitur cetak dan unduh dokumen yang mudah diakses
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Format dokumen resmi sesuai standar instansi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Tata letak konsisten untuk pengarsipan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Dokumen pendukung audit dan pemeriksaan</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white text-[#0A1D37] px-6 py-8 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex flex-col items-center space-y-3">
                <Printer className="w-12 h-12" />
                <span>Cetak Dokumen</span>
              </button>
              <button className="bg-white text-[#0A1D37] px-6 py-8 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex flex-col items-center space-y-3">
                <Download className="w-12 h-12" />
                <span>Unduh Dokumen</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0A1D37] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Pengajuan Belanja?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Pelajari alur lengkap proses pengajuan belanja barang dari tahap awal hingga penerimaan barang
          </p>
          <button
            onClick={() => setCurrentPage('proses')}
            className="bg-[#D4A017] text-[#0A1D37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Pelajari Alur Proses</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ProsesPage() {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Unit Subsi Pengusul',
      subtitle: 'Tahap Pengajuan Usulan',
      icon: FileText,
      color: 'bg-blue-500',
      description: 'Unit kerja mengajukan permohonan belanja barang untuk mendukung kegiatan operasional atau pelaksanaan tugas',
      details: [
        'Menyusun usulan belanja dengan lengkap dan jelas',
        'Mencantumkan tanggal pengajuan usulan',
        'Menentukan nama barang yang dibutuhkan',
        'Menentukan jumlah dan satuan barang',
        'Mencantumkan merek barang (jika ditentukan)',
        'Menjelaskan spesifikasi teknis tertentu (jika diperlukan)',
        'Menyampaikan usulan ke Kasubag Tata Usaha',
      ],
    },
    {
      id: 2,
      title: 'Kasubag Tata Usaha',
      subtitle: 'Pemeriksaan & Verifikasi',
      icon: CheckCircle,
      color: 'bg-green-500',
      description: 'Meneliti dan memverifikasi usulan belanja barang yang diajukan oleh Unit Subsi Pengusul',
      details: [
        'Memverifikasi kesesuaian barang dengan kebutuhan unit kerja',
        'Memastikan jenis belanja sesuai akun anggaran',
        'Memeriksa ketersediaan anggaran dalam POK',
        'Mengusulkan revisi POK jika anggaran belum tersedia',
        'Meneruskan usulan yang telah diverifikasi',
      ],
    },
    {
      id: 3,
      title: 'Pejabat Pembuat Komitmen (PPK)',
      subtitle: 'Penentuan Metode',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Bertanggung jawab atas pelaksanaan pengadaan barang dan menentukan mekanisme belanja',
      details: [
        'Menentukan mekanisme dan metode belanja yang sesuai',
        'Memberikan arahan teknis terkait pelaksanaan pengadaan',
        'Melimpahkan kewenangan pelaksanaan belanja kepada Tim Pengadaan',
        'Memastikan keputusan sesuai dengan peraturan yang berlaku',
      ],
    },
    {
      id: 4,
      title: 'Kuasa Pengguna Anggaran (KPA)',
      subtitle: 'Persetujuan Akhir',
      icon: CheckCircle,
      color: 'bg-orange-500',
      description: 'Memberikan persetujuan akhir terhadap usulan belanja barang',
      details: [
        'Meninjau usulan yang telah melalui verifikasi dan rekomendasi',
        'Memastikan kesesuaian dengan kebijakan instansi',
        'Memverifikasi ketersediaan anggaran',
        'Memberikan persetujuan untuk melanjutkan proses belanja',
      ],
    },
    {
      id: 5,
      title: 'Tim Pengadaan',
      subtitle: 'Pelaksanaan Pembelian',
      icon: ShoppingCart,
      color: 'bg-red-500',
      description: 'Melaksanakan pembelian barang sesuai arahan dan rekomendasi dari PPK',
      details: [
        'Membeli barang sesuai spesifikasi yang telah disetujui',
        'Berkoordinasi dengan Bendahara Pengeluaran untuk pembayaran',
        'Mengumpulkan bukti belanja dan dokumen pendukung',
        'Menyerahkan barang kepada Tim Penerimaan Belanja',
        'Memastikan proses pembelian sah dan terdokumentasi',
      ],
    },
    {
      id: 6,
      title: 'Kepala Urusan Umum',
      subtitle: 'Penerimaan & Distribusi',
      icon: Package,
      color: 'bg-teal-500',
      description: 'Menerima barang dan melakukan pemeriksaan kesesuaian serta distribusi',
      details: [
        'Menerima barang dari Tim Pengadaan',
        'Melakukan pemeriksaan kesesuaian barang',
        'Mencatat barang ke dalam data persediaan atau aset',
        'Mendistribusikan barang kepada Unit Subsi Pengusul',
        'Melengkapi proses serah terima dengan bukti penerimaan',
        'Menyimpan barang yang belum digunakan',
        'Melakukan stok opname secara berkala',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1D37] mb-4">
          Alur Proses Pengajuan Belanja
        </h1>
        <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proses belanja barang dilaksanakan secara bertahap melibatkan 6 pihak utama dengan tugas dan tanggung jawab yang jelas
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-7 top-20 w-0.5 h-full bg-gradient-to-b from-[#D4A017] to-transparent hidden md:block"></div>
            )}

            {/* Step Card */}
            <div
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                expandedStep === step.id ? 'ring-4 ring-[#D4A017]' : ''
              }`}
            >
              <button
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                className="w-full p-6 flex items-start space-x-4 text-left"
              >
                <div className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-gray-500 font-semibold mb-1">
                        TAHAP {step.id}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A1D37] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#D4A017] font-semibold mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                        expandedStep === step.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {expandedStep === step.id && (
                <div className="px-6 pb-6 pl-24">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-[#D4A017]">
                    <h4 className="font-bold text-[#0A1D37] mb-4 text-lg">
                      Detail Tugas dan Tanggung Jawab:
                    </h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Flow */}
      <div className="mt-16 bg-gradient-to-r from-[#0A1D37] to-[#1a2d47] rounded-2xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Ringkasan Alur Proses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-white text-sm font-semibold">
                {step.title}
              </div>
              {index !== steps.length - 1 && (
                <ChevronRight className="w-6 h-6 text-[#D4A017] mx-auto mt-2 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <div className="inline-block bg-[#D4A017] text-[#0A1D37] px-6 py-3 rounded-lg font-bold">
            ✓ Proses Selesai - Barang Siap Digunakan
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="mt-12 bg-yellow-50 border-l-4 border-[#D4A017] rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-[#0A1D37] mb-2">
              Catatan Penting
            </h3>
            <p className="text-gray-700">
              Setiap tahap dalam proses belanja barang harus dilaksanakan sesuai dengan SOP yang berlaku untuk memastikan tertib administrasi, transparansi, dan akuntabilitas penggunaan anggaran negara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;