<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";

  interface Props {
    id: string;
    label: string;
    options: string[];
    value: string;
    onchange?: ChangeEventHandler<HTMLSelectElement> | null;
  }

  let { id, label, options, value = $bindable<string>(), onchange = null }: Props = $props();
</script>

<div>
  <label for={id}>{label}</label>
  <select {id} {onchange} bind:value>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 225px;
  }

  label {
    font-size: 19px;
    font-weight: bold;
    padding: 0;
    color: indigo;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    user-select: none;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
  }

  select {
    font-size: 19px;
    margin: 1px 0;
    border: 2px solid darkorchid;
    border-radius: 10px;
    color: indigo;
    height: 38px;
    appearance: base-select;
    background-color: white;
  }
  ::picker(select) {
    border: none;
    appearance: base-select;
  }

  select::picker-icon {
    transition: 0.3s rotate;
  }
  select:open::picker-icon {
    rotate: 180deg;
  }

  @media (hover: hover) {
    select:hover {
      background: linear-gradient(ivory, mistyrose);
    }

    option:nth-of-type(odd):hover,
    option:hover {
      background: linear-gradient(to right, mistyrose, plum);
    }
  }

  select:focus {
    background: linear-gradient(ivory, mistyrose);
  }

  option {
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    border: 2px solid darkorchid;
    background: white;
    padding: 4px;
    transition: 0.4s;
  }

  option:first-of-type {
    border-radius: 10px 10px 0 0;
  }

  option:last-of-type {
    border-radius: 0 0 10px 10px;
  }

  ::picker(select) {
    border-radius: 10px;
  }

  option:not(option:last-of-type) {
    border-bottom: none;
  }

  option:nth-of-type(odd) {
    background: linen;
  }

  option:focus {
    background: plum;
  }

  option::checkmark {
    color: indigo;
    font-size: 1.5em;
    font-weight: bold;
  }
</style>
