<script lang="ts">
  import Checkbox from '$lib/modules/components/inputs/checkbox.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import { type MainAttr, attrColor } from '$lib/shared/attrs';

  interface Props {
    id: string;
    attr: MainAttr;
  }

  let { id, attr }: Props = $props();
  let caps = $derived(attr.toUpperCase());
  let attrId = $derived(`${id}=${attr}`);
</script>

<div class="stat" style:color={attrColor(attr)}>{caps}</div>
<div><Text id="{attrId}-stat" /></div>
<div><Text id="{attrId}-mod" /></div>
<div><Text id="{attrId}-save" /></div>
<div><Checkbox id="{attrId}-check" /></div>

<style>
  div {
    text-align: right;
    padding-right: 5px;
    border-right: 1px dotted var(--color-card-border);
  }
  div:first-of-type {
    padding-right: 5px;
  }

  div:nth-last-of-type(2),
  div:nth-last-of-type(1) {
    border: 0;
  }
</style>
