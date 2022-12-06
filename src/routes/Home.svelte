<script>
    import { push } from 'svelte-spa-router'

</script>

<div class="container my-3">
    <!-- 게시글 -->
    <h2 class="border-bottom py-2">zzz</h2>

    <button class="btn btn-secondary" on:click="{() => {
        push('/games/flappy')
    }}">Flappy 게임으로</button>

</div>