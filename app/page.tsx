import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
  <>
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="index.scss" />
    <title>ayeshafatima_ch2</title>
  </head>

  <body>
    <header className="container">
      <div className="page-header">
        <div className="logo">
          <a href="'/img/img2.jpg'">Logo.</a>

        </div>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="bx bx-menu"></i>
          </div>
        </label>
        <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </header>

    <section className="container">
      <div className="main">
        <div className="images">
          <img src='/img/img.jpg' alt="" className="img-w" />
        </div>
        <div className="detail">
          <h3>Hi, I'm</h3>
          <h1>
            <span style={{ color: '#f9532d' }}>Ayesha</span> Fatima
          </h1>
          <div className="social">
            <Link href={"https://www.linkedin.com/in/ayesha-fatima-ch2/"}> <i className="bx bxl-linkedin"></i></Link>
            <Link href={"https://instagram.com/ayeshafatima_ch2?igshid=MzMyNGUyNmU2YQ=="}> <i className="bx bxl-instagram"></i></Link>
            <Link href={"https://github.com/Ayeshafatimach2"}> <i className="bx bxl-github"></i></Link>
             <Link href={"https://youtube.com/@ayeshafatima_ch2?feature=shared"}> <i className="bx bxl-youtube"></i></Link>
          
          </div>
        </div>
      </div>
    </section>
  </body>
</>
  
  );
};

