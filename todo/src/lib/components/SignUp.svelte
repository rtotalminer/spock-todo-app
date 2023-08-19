<script lang="ts">
  import { onMount } from "svelte";
  import { pb, user } from '../services/pocketbase';

  onMount(async () => {
    console.log({$user})
		if ($user != null) {
      window.location.href = '/';
    }
	});

  let username: string;
  let password: string;

  async function signUp() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
      };
      const authData = await pb.collection('users').create(data);
      await pb.collection('users').authWithPassword(username, password);
      window.location.href = '/';
    }
    catch (err) {
      // handle error
    }
  }
</script>


<div class="card w-96 grid place-items-center">
  <div class="card-body">
    <h2 class="card-title mb-5 justify-center">Sign Up</h2>  
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
    <div class="card-actions justify-center pt-3">
      <button on:click={signUp} class="btn btn-primary">Sign Up</button>
    </div>
  </div>
</div>

