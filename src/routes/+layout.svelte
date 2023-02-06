<script>
    import '../app.css';
    // import '../../node_modules/normalize.css/normalize.css'
    import Footer from '../lib/Footer.svelte';
    import Navbar from '../lib/Navbar.svelte';
    import "@fontsource/inter";
</script>

<style>
:root {
    --font-family: "Inter";
}
</style>

<div class="dark-bg">
    <Navbar/>

    <div class="">
        <slot />
    </div>
    
    <Footer/>
</div>