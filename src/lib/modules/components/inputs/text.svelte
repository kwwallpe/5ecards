<script lang="ts">
  import { getContext } from "svelte";
  import { FontAccessor, FontRole, fontSettingsContextKey } from "$lib/shared/fontState.svelte";
  import { CharacterAccessor, characterContextKey } from "$lib/shared/characterState.svelte";

  interface Props {
    id: string;
    textAlign?: "left" | "center" | "right";
    fontWeight?: "bold" | "normal";
    fontSize?: string | null;
    color?: string | null;
    value?: string;
  }

  let {
    id,
    textAlign = "right",
    fontWeight = "normal",
    fontSize = null,
    color = null,
    value = $bindable<string>(),
  }: Props = $props();

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.input));
  const characterAccessor: CharacterAccessor = $derived(new CharacterAccessor(id, getContext(characterContextKey)));
</script>

<input
  type="text"
  {id}
  bind:value={characterAccessor.text}
  style="
    font-family: {fontAccessor.font};
    text-align: {textAlign};
    font-size: {fontSize || '10px'} !important;
    font-size-adjust: {fontAccessor.adjust};
    font-weight: {fontWeight};
    word-spacing: {fontAccessor.wordSpacing};
    color: {color || 'dimgray'};
    "
/>

<style>
  input[type="text"] {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 2px;
    border: 0;
    margin: 0;
    outline-offset: -1px;
    background-color: transparent;
  }

  @media (hover: hover) {
    input[type="text"]:not(:disabled):hover {
      background-color: mistyrose;
      outline-style: dotted;
      outline-color: lightgray;
    }
  }

  input[type="text"]:focus-visible {
    background-color: ivory;
    outline-style: dotted;
    outline-color: lightgray;
    outline-width: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    input[type="text"] {
      transition: none;
    }
  }

  @media print {
    input[type="text"],
    input[type="text"]:not(:disabled):hover {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;

      background-color: transparent;
      outline: none;
    }
  }
</style>
