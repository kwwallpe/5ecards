<script lang="ts">
  import Checkbox from "$lib/modules/components/inputs/checkbox.svelte";
  import Text from "$lib/modules/components/inputs/text.svelte";

  interface Props {
    attr: string;
    name: string;
    noBorder?: boolean;
  }

  let { attr, name, noBorder = false }: Props = $props();
  let color = $derived(`var(--${attr}, black)`);
  let borderless = $derived(noBorder ? "no-border" : "");
  let id = $derived(name.toLowerCase().replace(/[\W_]+/g, "-"));
</script>

<div class={["skill-row", { borderless }]} style:color>
  <div><Checkbox id="skill-{id}-prof" /></div>
  <div>{name}</div>
  <div><Text id="skill-{id}" /></div>
</div>

<style>
  .skill-row {
    grid-template-columns: 1fr 4fr 1.25fr;
    align-items: center;
    justify-content: left;
    margin: auto 0;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-image: linear-gradient(to right, transparent 0%, transparent 50%, lightgray 100%) 1;
  }

  .borderless {
    border: 0;
  }
</style>
