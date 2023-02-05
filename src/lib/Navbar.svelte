<style>
    .navbar {
        padding: 20px 120px;
    }

    .navbar-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* .navbar-logo {} */

    .navbar-links {
        display: flex;
        gap: 1rem;
    } 

    .navbar-links a {
        text-decoration: none;
        color: var(--white);
    }
</style>

<div class="container navbar">
    <div class="navbar-wrapper">
        <div class="navbar-logo">
            <img src="/Logo.svg" alt="" srcset="">
        </div>
        <div class="navbar-links">
            <a href="#">Products</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            
            <div>
                <a href="">Login</a>

                <a class="btn" href="#">
                    Register
                </a>
            </div>
        </div>
    </div>

</div>