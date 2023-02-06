<script>
    import '../app.css';
    import Footer from '../lib/Footer.svelte';
    import Theme from '../lib/Theme/Theme.svelte';
    import Navbar from '../lib/Navbar.svelte';
    import "@fontsource/inter";
</script>

<style>:root {
    --font-family: "Inter";
}
</style>
<Theme/>

<div class="dark-bg">
    <Navbar/>

    <div class="container" style="min-height: 80vh;">

        <slot />
        
    </div>
    <Footer/>
</div>