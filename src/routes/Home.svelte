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
                <h5>푸드덕</h5>
                <p>
                    최대한 멀리 날아가보자
                </p>
            </div>
            <div class="my-3">
                <button class="btn btn-secondary" on:click="{() => {
                    push('/games/flappy')
                }}">게임 시작</button>
            </div>
            
        </div>
    </div>

    <div class="card my-3">
        <div class="card-body">
            <div class="card-text" style="white-space: pre-line;">
                <h5>지구 침공</h5>
                <p>
                    외계인의 침략으로부터 지구를 지키자!
                </p>
            </div>
            <div class="my-3">
                <button class="btn btn-secondary" on:click="{() => {
                    push('/games/shooter')
                }}">게임 시작</button>
            </div>
            
        </div>
    </div>

    <div class="card my-3">
        <div class="card-body">
            <div class="card-text" style="white-space: pre-line;">
                <h5>긴트 연대기</h5>
                <p>
                    전설의 용사가 되기 위한 모험.. (체험판)
                </p>
            </div>
            <div class="my-3">
                <button class="btn btn-secondary" on:click="{() => {
                    push('/games/rpg')
                }}">게임 시작</button>
            </div>
            
        </div>
    </div>

</div>