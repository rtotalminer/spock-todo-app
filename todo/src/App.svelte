<script>
    import { Router, Link, Route } from "svelte-routing";

    import Header from "./lib/components/Header.svelte";
    import Login from "./lib/components/Login.svelte";
    import SignUp from "./lib/components/SignUp.svelte";
    import Todos from "./lib/components/Todos.svelte";
</script>

<Header/>

<Router>
  <Route path="/" component={Todos}/>
  <Route path="/sign-up" component={SignUp} />
  <Route path="/login" component={Login} />
</Router>


