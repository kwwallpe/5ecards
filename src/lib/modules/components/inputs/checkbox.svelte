<script lang="ts">
  interface Props {
    id: string;
    disabled?: boolean;
    "'--size'"?: string;
  }

  let { id, disabled = false }: Props = $props();
</script>

<input type="checkbox" {id} {disabled} />

<style>
  input[type="checkbox"] {
    box-sizing: border-box;
    width: var(--size, calc(1in / 8)) !important;
    height: var(--size, calc(1in / 8)) !important;
    margin: auto;
    padding: 0;
    border: 2px solid black;
    appearance: none;
    background-color: transparent;
    outline: none;
  }

  input[type="checkbox"]:checked {
    background-size: cover;
    background-color: black;
  }

  @media (hover: hover) {
    input[type="checkbox"]:not(:disabled):not(:checked):hover {
      background-color: plum;
      transform: scale(1.1);
    }

    input[type="checkbox"]:not(:disabled):checked:hover {
      transform: scale(1.1);
      background-color: darkmagenta;
    }
  }

  input[type="checkbox"]:focus-visible {
    background-color: plum;
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    input[type="checkbox"] {
      transition: none;
    }
  }

  @media print {
    input[type="checkbox"] {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
</style>
