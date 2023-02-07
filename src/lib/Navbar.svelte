<style>
    .navbar {
        padding: 20px 0;
    }

    .navbar-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* .navbar-logo {} */
    
    .menu-button {
        display: none;
    }
    .navbar-links {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    } 

    .navbar-links a {
        text-decoration: none;
        color: var(--white);
    }

    .navbar-links a:hover {
        text-decoration: none;
        color: var(--white);
        opacity: .777;
    }

    .navbar-buttons-wrapper {
        display: flex;
        justify-content: center;
        gap: .5rem;
        align-items: center;
    }
    .navbar-buttons-wrapper
    .navbar-divider::after {
        content: "";
        border-left: 1px solid var(--gray);
        opacity: .5;
    }

    @media (max-width: 768px) {
        .navbar-links {
            display: none;
        }

        .menu-button {
            display: inline-block;
        }
    }
</style>


<div class="container">
    <div class="navbar">
        <div class="navbar-wrapper">
            <img src="/Logo.svg" alt="" srcset="">
            <nav class="navbar-links">
                <a href="#">Products</a>
                <a href="#">Features</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <div class="navbar-buttons-wrapper">
                    <a href="">Login</a>
                    <span class="navbar-divider"></span>
                    <a class="btn" href="#">
                        Register
                    </a>
                </div>
            </nav>
            <div class="menu-button">
                Menu
            </div>
        </div>
    </div>
</div>