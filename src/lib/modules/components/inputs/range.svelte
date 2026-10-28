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
  <div class="flex flex-row gap-1.5 justify-between mb-1.5">
    <div>
      <Label for={id}>{label}</Label>
    </div>
    <div>
      <Label for={id}>{percent}</Label>
    </div>
  </div>
  <Range {id} {min} {max} {step} bind:value {onchange} />
</div>
