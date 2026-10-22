<script lang="ts">
  import { getContext } from 'svelte';
  import { CharacterAccessor, characterContextKey } from '$lib/shared/characterState.svelte';

  interface Props {
    id: string;
    disabled?: boolean;
    "'--size'"?: string;
  }

  let { id, disabled = false }: Props = $props();
  let characterAccessor: CharacterAccessor = $derived(new CharacterAccessor(id, getContext(characterContextKey)));
</script>

<input type="checkbox" class="appearance-none" {id} {disabled} bind:checked={characterAccessor.check} />

<style>
  input[type='checkbox'] {
    box-sizing: border-box;
    width: var(--size, calc(1in / 8)) !important;
    height: var(--size, calc(1in / 8)) !important;
    margin: auto;
    padding: 0;
    border: 2px solid black;
    background-color: transparent;
    outline: none;
  }

  input[type='checkbox']:checked {
    background-size: cover;
    background-color: black;
    background-image: none;
  }

  @media (hover: hover) {
    input[type='checkbox']:not(:disabled):not(:checked):hover {
      background-color: plum;
      transform: scale(1.1);
    }

    input[type='checkbox']:not(:disabled):checked:hover {
      transform: scale(1.1);
      background-color: darkmagenta;
    }
  }

  input[type='checkbox']:focus-visible {
    background-color: plum;
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    input[type='checkbox'] {
      transition: none;
    }
  }

  @media print {
    input[type='checkbox'] {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
</style>
