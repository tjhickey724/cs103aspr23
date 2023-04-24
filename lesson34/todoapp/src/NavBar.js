import React from 'react';

export default function NavBar({setPage}){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CS103a React Demo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a  onClick={() => setPage('Main')}
                        class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a  onClick={() => setPage('ToDo')}
                        class="nav-link" href="#">ToDo</a>
                    </li>
                    <li class="nav-item">
                    <a  onClick={() => setPage('About')}
                        class="nav-link" href="#">About</a>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    )
}


