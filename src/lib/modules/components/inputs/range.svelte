<script lang="ts">
  import { Label, Range } from 'flowbite-svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  interface Props {
    id: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onchange?: ChangeEventHandler<HTMLInputElement> | null;
  }

  let {
    id,
    label = '',
    min = 1,
    max = 100,
    step = 1,
    value = $bindable<number>(),
    onchange: onchange = null,
  }: Props = $props();

  let percent = $derived((value * 100).toFixed(0) + '%');
</script>

<div>
  <div class="range">
    <div>
      <Label class="font-bold text-lg m-0 p-0" for={id}>{label}</Label>
    </div>
    <div class="font-bold text-lg m-0 p-0">
      {percent}
    </div>
  </div>
  <Range {id} {min} {max} {step} bind:value {onchange} />
</div>

<style>
  .range {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>
