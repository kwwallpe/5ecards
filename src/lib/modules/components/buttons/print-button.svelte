<script lang="ts">
  import Button from "$lib/modules/components/inputs/button.svelte";
  import type { ButtonAppearance } from "$lib/modules/components/inputs/button.svelte";

  let id = "print-button";
  let label = "Print the page(s)";
  let appearances: ButtonAppearance[] = [
    {
      title: "Print",
      icon: "bx:printer",
    },
  ];

  let button: Button;

  function handleClick(btn: Button) {
    window.print();
  }
</script>

<Button bind:this={button} {id} {label} {appearances} onclick={() => handleClick(button)} />
