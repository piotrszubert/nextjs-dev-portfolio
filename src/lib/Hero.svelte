<script>
    import '../app.css';
</script>


<style>


.hero {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 7rem;
}

.hero-text {
    flex-grow: 1;
    flex-basis: 50%;
}

.hero-image {
    flex-grow: 1;
    flex-basis: 50%;
    display: grid;
    place-items: center;
}

.hero-image img {
    max-width: 100%;
    min-width: 250px;
    height: auto;
}

.hero h1 {
    font-size: 64px;
    padding: 24px 0;
}

.sub-heading {
    padding-bottom: 24px;
}



@media (max-width: 768px) {
    .hero h1 {
        font-size: 48px;
    }
}
</style>


<div class="container">
    <div class="hero">
        <div class="hero-text">
            <div class="badge-info">
                <span class="badge-pill">
                    75% save
                </span>
                <span class="badge-text">

                </span>
            </div>
            <h1>
                Fastest & secure platform to invest in crypto
            </h1>
            <div class="sub-heading">
                Buy and sell cryptocurrencies, trusted by 10M wallets 
                with over $30 billion in transactions.
            </div>
            <a href="#" class="btn" style="display: inline-block;">
                Try for FREE
            </a>
        </div>
        <div class="hero-image">
            <img width="400" src="/Hero.svg" alt="Hero image">
        </div>
    </div>
</div>