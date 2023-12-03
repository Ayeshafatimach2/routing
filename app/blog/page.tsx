import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

export default function blog() {
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

  </>
  );
};