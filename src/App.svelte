<script>
    import Router from 'svelte-spa-router'
    import Home from './routes/Home.svelte'
    import Flappy from './routes/Flappy.svelte'

    const routes = {
        '/': Home,
        '/games/flappy': Flappy,
    }
</script>

<Router {routes}/>