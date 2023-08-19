<script lang="ts">
  import { onMount } from "svelte";
  import "../../app.css";
  import { pb, user } from '../services/pocketbase';

  let username: string;
  let password: string;

  onMount(async () => {
    console.log({$user})
		if ($user != null) {
      window.location.href = '/';
    }
	});

  var error: string = "";

  async function login() {
    error = "";
    try {
      await pb.collection('users').authWithPassword(username, password);
      window.location.href = '/';
    }
    catch (err) {
      error = err.message;
      
    }
  }
</script>

<div class="card w-96 grid place-items-center">
  <div class="card-body">
    <h2 class="card-title mb-5 justify-center">Login</h2>  
      <form on:submit|preventDefault>
        <input
            class="input input-bordered w-full max-w-xs"
            placeholder="Username"
            type="text"
            bind:value={username}
          />
          <input
            class="input input-bordered w-full max-w-xs mt-5"
            placeholder="Password"
            type="password"
            bind:value={password}
          />
      </form>
    {#if error != ""}
      <p>{error}</p>
    {/if}
    <div class="card-actions justify-center pt-3">
      <button on:click={login} class="btn btn-primary">Login</button>
    </div>
  </div>
</div>