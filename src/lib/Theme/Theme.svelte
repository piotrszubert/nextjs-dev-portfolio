<script>
    import "@fontsource/inter";
</script>

<style>
:global(:root) {
    --font-family: "Inter";
    /* COLORS */
    --white: #fff;
    --gray: #E0E0E0;
    --button-bg-color: #3671E9;
    --dark-bg: #0D0D2B;
    --light-bg: #2B076E;
    /* PADDINGS */
    --button-padding-x: 0 20px;
    --button-padding-y: 10px 0;
    /* TYPOGRAPHY */
    --line-height: 28px;
}

:global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    
:global(body) {
    font-family: var(--font-family);
    min-height: 100vh;
    color: var(--white);
}

:global(.container){
    padding: 0 120px;
}

:global(.dark-bg) {
    background-color: var(--dark-bg);
}

:global(.btn) {
    background-color: var(--button-bg-color);
    padding: 14px 32px;
    border-radius: 32px;
}

</style>