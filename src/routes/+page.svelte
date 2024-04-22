<script>
    import { goto } from '$app/navigation';
    import '../app.css';
  </script>
  
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <button on:click={() => goto('/cuentas')}>Ir a Cuentas</button>
  