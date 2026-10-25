<script lang="ts">
  import Checkbox from '$lib/modules/components/inputs/checkbox.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import { type MainAttr, attrColor } from '$lib/shared/attrs';

  interface Props {
    attr: MainAttr;
    name: string;
    noBorder?: boolean;
  }

  let { attr, name, noBorder = false }: Props = $props();
  let borderless = $derived(noBorder ? 'no-border' : '');
  let id = $derived(name.toLowerCase().replace(/[\W_]+/g, '-'));
</script>

<div class={['skill-row', { borderless }]}>
  <div><Checkbox id="skill-{id}-prof" /></div>
  <div style:color={attrColor(attr)}>{name}</div>
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
    border-image: linear-gradient(to right, transparent 0%, transparent 50%, var(--color-card-border) 100%) 1;
  }

  .borderless {
    border: 0;
  }
</style>
