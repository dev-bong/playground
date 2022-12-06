<script>
    import Router from 'svelte-spa-router'
    import Home from './routes/Home.svelte'
    import Flappy from './routes/Flappy.svelte'
    import RPG from './routes/RPG.svelte'
    import Navigation from "./components/Navigation.svelte"

    const routes = {
        '/': Home,
        '/games/flappy': Flappy,
        '/games/rpg': RPG,
    }
</script>

<Navigation />
<Router {routes}/>