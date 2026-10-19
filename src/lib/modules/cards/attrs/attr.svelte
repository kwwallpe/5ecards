<script lang="ts">
  import Checkbox from "$lib/modules/components/inputs/checkbox.svelte";
  import Text from "$lib/modules/components/inputs/text.svelte";

  export type MainAttr = "str" | "dex" | "con" | "int" | "wis" | "cha";

  interface Props {
    id: string;
    stat: MainAttr;
  }

  let { id, stat }: Props = $props();
  let color = $derived(`var(--${stat}, black)`);
  let caps = $derived(stat.toUpperCase());
  let attrId = $derived(`${id}=${stat}`);
</script>

<div class="stat" style:color>{caps}</div>
<div><Text id="{attrId}-stat" /></div>
<div><Text id="{attrId}-mod" /></div>
<div><Text id="{attrId}-save" /></div>
<div><Checkbox id="{attrId}-check" /></div>

<style>
  div {
    text-align: right;
    padding-right: 5px;
    border-right: 1px dotted lightgray;
  }
  div:first-of-type {
    padding-right: 5px;
  }

  div:nth-last-of-type(2),
  div:nth-last-of-type(1) {
    border: 0;
  }
</style>
