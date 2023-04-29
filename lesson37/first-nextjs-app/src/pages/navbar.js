import React from 'react';
import Link from 'next/link';

export default function navbar(){
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/test">Test via a-href</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" 
                          href="/test"> Test via Link</Link>
                
                </li>
                <li className="nav-item">
                    <Link className="nav-link" 
                          href="/profile"> Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" 
                          href="/todolist"> To Do List</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}