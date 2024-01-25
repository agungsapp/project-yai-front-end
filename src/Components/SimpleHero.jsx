import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'



function SimpleHero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  text-center">
        <div className="w-9/12">
          <h1 className="text-5xl font-bold">Tentang Kami</h1>
          <p className="py-6">
            Selamat datang di ProjectYai, tempat dimana ide-ide inovatif bertransformasi menjadi solusi teknologi. Kami bukan sekadar tim, kami adalah sebuah gerakan, berupaya mengubah cara kerja dunia melalui kekuatan software. Meski belum terdaftar secara resmi sebagai perusahaan, semangat kami tidak kalah dengan perusahaan ternama.

            Kami spesialis dalam pengembangan software, dengan fokus utama pada pembuatan website dan berbagai solusi software lainnya. Klien kami bervariasi, mulai dari instansi pemerintahan hingga bisnis korporat, semua kami layani dengan dedikasi dan keahlian yang tinggi.

            Setiap langkah yang kami ambil di ProjectYai adalah tentang membangun masa depan yang lebih cerdas dan efisien. Bersama kami, langkahkan kaki Anda menuju era digital dengan solusi yang tidak hanya canggih, tapi juga personal dan unik. Ayo, wujudkan visi Anda bersama kami.
          </p>
          <button className="btn text-white btn-success">
            <FontAwesomeIcon icon={faCommentDots} />
            Hubungi Kami</button>
        </div>
      </div>
    </div>
  )
}

export default SimpleHero;
