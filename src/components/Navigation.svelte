<script>
    import { link } from 'svelte-spa-router'

    let a = window.location
</script>

<!-- 네비게이션바 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container-fluid">
        <div class="navbar-item">
            <img src="/game-console.png" alt="Logo" width="64" height="64" />
        </div>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a use:link class="nav-link" href="/" on:click="{() => {a.reload()}}">홈으로</a>
                </li>
            </ul>
        </div>
    </div>
</nav>