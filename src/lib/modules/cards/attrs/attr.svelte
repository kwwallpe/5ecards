<script lang="ts">
  import Checkbox from '$lib/modules/components/inputs/checkbox.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import { type MainAttr, attrTextClass } from '$lib/shared/attrs';

  interface Props {
    id: string;
    attr: MainAttr;
  }

  let { id, attr }: Props = $props();
  let caps = $derived(attr.toUpperCase());
  let attrId = $derived(`${id}-${attr}`);
  const sharedClasses = 'stat text-right pr-1.25 ' as const;
  const borderedClasses = 'border-r border-dotted border-card-border' as const;
</script>

<div class="{sharedClasses} {borderedClasses} {attrTextClass[attr]}">
  {caps}
</div>
<div class="{sharedClasses} {borderedClasses}"><Text id="{attrId}-stat" fontSize="12px" /></div>
<div class="{sharedClasses} {borderedClasses}"><Text id="{attrId}-mod" fontSize="12px" /></div>
<div class={sharedClasses}><Text id="{attrId}-save" fontSize="12px" /></div>
<div class={sharedClasses}><Checkbox id="{attrId}-check" /></div>
