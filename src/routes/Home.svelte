<script>
    import { push } from 'svelte-spa-router'

    let a = window.location

</script>

<div class="container my-3">
    <!-- 게시글 -->
    <h2 class="border-bottom py-2">zzz</h2>

    <div class="card my-3">
        <div class="card-body">
            <div class="card-text" style="white-space: pre-line;">
                <h5>Flappy 게임</h5>
                <p>
                    설명..
                </p>
            </div>
            <div class="my-3">
                <button class="btn btn-secondary" on:click="{() => {
                    push('/games/flappy')
                }}">Flappy 게임 시작</button>
            </div>
            
        </div>
    </div>

    <div class="card my-3">
        <div class="card-body">
            <div class="card-text" style="white-space: pre-line;">
                <h5>RPG 게임</h5>
                <p>
                    설명..
                </p>
            </div>
            <div class="my-3">
                <button class="btn btn-secondary" on:click="{() => {
                    push('/games/rpg')
                }}">RPG 게임 시작</button>
            </div>
            
        </div>
    </div>

</div>