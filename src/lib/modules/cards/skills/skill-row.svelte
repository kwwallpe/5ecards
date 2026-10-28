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
  let id = $derived(name.toLowerCase().replace(/[\W_]+/g, '-'));
</script>

<div
  class={[
    'grid-cols-[1fr_4fr_1.25fr]',
    'mx-auto',
    'my-0',
    'items-center',
    'justify-start',
    'grad-border',
    { 'border-b': !noBorder },
  ]}
>
  <div><Checkbox id="skill-{id}-prof" /></div>
  <div style:color={attrColor(attr)}>{name}</div>
  <div><Text id="skill-{id}" fontSize="12px" /></div>
</div>
