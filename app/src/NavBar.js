import React from "react";


export function NavBar ({ handleSectionClick }) {
    return (
        <>
        <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
    <title>Bootstrap Example</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </head>
        <nav class="navbar navbar-expand-md bg-body">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => handleSectionClick("breakfast")} >Breakfast</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">Lunch</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">Dinner</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">Appetizers!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        
        
        </>
    )
}