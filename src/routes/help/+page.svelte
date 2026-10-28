<script lang="ts">
  import Bordered from '$lib/modules/ui/bordered.svelte';

  import Controls from './controls.md';
  import Idea from './idea.md';
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards - Help</title>
</svelte:head>

<Bordered print={true}>
  <div
    class="[&_img]:float-left [&_img]:mr-4 [&_img]:mb-4
    [&_h2]:mt-0
    [&_hr]:text-body [&_hr]:clear-both [&_hr]:my-6"
  >
    <Controls />
  </div>

  <div
    class="[&_img]:float-right [&_img]:ml-4
    [&_img]:aspect-1280/720 [&_img]:max-w-1/2 [&_img]:min-w-xs
    [&_h2]:mt-0"
  >
    <Idea />
  </div>
</Bordered>
