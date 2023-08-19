<script>
  import { Router, Link, Route } from "svelte-routing";
  
  import { pb, user } from '../services/pocketbase';
  
  
  function signOut() {
    pb.authStore.clear();
  }


</script>

<div class="navbar bg-primary text-primary-content">
  <Router>
    <Link to="/"><p class="btn btn-ghost normal-case text-xl">My Todo App</p></Link>
  </Router>
  

<!-- 
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav> -->

  <div class="absolute right-0 pr-10">
    {#if $user}
      <div class="avatar">
        <div class="w-12 rounded">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar"/>
        </div>
      </div>
      <button class="btn btn-primary" on:click={signOut}>Sign Out</button>
    {:else}
      <Router>
        <Link to="/login"><button class="btn btn-primary mr-5">Login</button></Link>
        <Link to="/sign-up"><button class="btn btn-primary">Sign Up</button></Link>
      </Router>
    {/if}
  </div>
</div>