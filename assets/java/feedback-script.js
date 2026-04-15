// 1. Inisialisasi Supabase
const SB_URL = "https://nefgthsnpqrbzymyqexe.supabase.co";
// PERINGATAN: Gunakan Anon Key, jangan Service Role Key untuk keamanan di sisi Client/Browser
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZmd0aHNucHFyYnp5bXlxZXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMDM5NjIsImV4cCI6MjA5MTY3OTk2Mn0.30VBtyM4AW22JgjpqBmWTxz9br2z5AL__NAnyKRj5Ng"; 
const _supabase = supabase.createClient(SB_URL, SB_KEY);

// Form submission handler
document.getElementById('feedbackForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Ambil data dari input
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    
    // Sesuai permintaanmu: Otomatis Anonim
    const namaPengirim = "Siswa Anonim";

    // Validasi sederhana
    if (!category || !description.trim()) {
        alert('Mohon isi kategori dan deskripsi feedback.');
        return;
    }

    try {
        // 2. Kirim data ke tabel 'feedback_osis'
        // DISESUAIKAN: Nama kolom harus 'Name' dan 'Feedback' sesuai gambar tabelmu
        const { data, error } = await _supabase
            .from('feedback_osis') 
            .insert([
                { 
                    Name: namaPengirim, 
                    Feedback: `[${category.toUpperCase()}] - ${description}` 
                }
            ]);

        if (error) throw error;

        // Jika berhasil
        alert('Terima kasih! Feedback kamu sudah diterima.');
        
        // Pindah ke halaman thank you (opsional)
        window.location.href = "thankyou.html";

    } catch (err) {
        console.error('Error detail:', err);
        alert('Gagal mengirim data: ' + err.message);
    }
});

// Animasi tetap dipertahankan
document.addEventListener('DOMContentLoaded', function() {
    const formSection = document.querySelector('.form-section');
    if(formSection) formSection.classList.add('visible');
});