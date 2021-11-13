class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `            
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a href="#" class="navbar-brand">GameStat</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
                            aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="toggleMobileMenu">
                        <ul class="navbar-nav">
                            <li><a href="index.html" class="nav-link">Dashboard</a></li>
                            <li><a href="playtime.html" class="nav-link">Playtime</a></li>                                                        
                            <li><a href="#" class="nav-link">Spending</a></li>                                              
                            <li><a href="#" class="nav-link">Global Rankings</a></li>
                            <li><a href="#" class="nav-link">Favourite tags</a></li>
                            <li><a href="#" class="nav-link">Goals</a></li>
                            <li><a href="#" class="nav-link">Library</a></li>
                            <li> <a href="../signin/signin.html" class="nav-link">Log In</a></li>
                        </ul>
                    </div>
                </nav>
            </div>            
        `;
    }
}

customElements.define('header-component', Header);