<script lang="ts">
  import Bordered from '$lib/modules/ui/bordered.svelte';

  import Changes from '../../../CHANGELOG.md';
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards - Changes</title>
</svelte:head>

<Bordered print={true}>
  <Changes />
</Bordered>
