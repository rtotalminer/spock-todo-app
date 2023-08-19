<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { user, pb } from "../services/pocketbase";

  let todos = [];
  let newTodo: string;

  onMount(async () => {
    
  });

  async function addTodo() {

  }

</script>

{#if $user}
  <div>
    <h1>Todo List</h1>

    <input
        class="input input-bordered w-full max-w-xs mt-5"
        placeholder="Task"
        type="text"
        bind:value={newTodo}
      />
      <button on:click={addTodo} class="btn btn-primary">+</button>
  </div>

{:else}

  <h1>Make an account.</h1>

{/if}