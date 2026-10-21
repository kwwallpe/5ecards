<script lang="ts">
  import { getContext } from 'svelte';

  import { Button } from 'flowbite-svelte';
  import UndoOutline from 'flowbite-svelte-icons/UndoOutline.svelte';
  import CloseCircleOutline from 'flowbite-svelte-icons/CloseCircleOutline.svelte';
  import { FontRole, FontAccessor, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  interface Props {
    role: FontRole;
    all?: boolean;
  }

  let { role, all = false }: Props = $props();

  let roleText = $derived(String(role).toLowerCase());
  let resetType = $derived(all ? 'all' : 'current');
  let id = $derived(`card-${role}-reset-${resetType}-button`);
  let label = $derived(
    all ? `Reset all ${roleText} font adjustments` : `Reset the ${roleText} adjustment for the current font`,
  );
  let title = $derived(all ? 'Reset All' : 'Reset Adjustment');

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), role));

  const onclick = () => {
    fontAccessor.resetAdjustment(all);
  };
</script>

<Button shadow color="purple" aria-label={label} {id} {onclick}>
  {#if all}
    <CloseCircleOutline class="me-2" />
  {:else}
    <UndoOutline class="me-2" />
  {/if}
  {title}
</Button>
