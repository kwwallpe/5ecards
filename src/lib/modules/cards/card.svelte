<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';

  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  interface Props {
    id: string;
    children: Snippet;
    rows?: string | null;
  }

  let { id, rows = '1fr 12fr', children }: Props = $props();

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.label));
</script>

<div
  {id}
  class="
    *text-2xs m-auto grid
    bg-card text-card-fg border border-card-border
    w-[5in] h-[3in] aspect-5/3
    overflow-hidden whitespace-nowrap
    [:where(&)_div]:grid [:where(&)_div]:overflow-hidden
    print:m-0 print:self-start print:justify-self-start
  "
  style="
    font-family: {fontAccessor.font};
    font-size-adjust: {fontAccessor.adjust};
    word-spacing: {fontAccessor.wordSpacing};
  "
>
  <div class="m-(--eighth) w-[4.75in] h-[2.75in]" style:grid-template-rows={rows}>
    {@render children()}
  </div>
</div>
