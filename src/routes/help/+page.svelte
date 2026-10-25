<script lang="ts">
  import { resolve } from '$app/paths';
  import controlsPic from '$lib/assets/controls.png';
  import folioPic from '$lib/assets/folio.jpeg';
  import Bordered from '$lib/modules/ui/bordered.svelte';
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards - Help</title>
</svelte:head>

<Bordered print={true}>
  <h1>D&D 5e Character Index Cards</h1>
  <h2>The Big Idea</h2>
  <div class="with-img">
    <p>
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a href={folioPic}>
        <img
          id="help-folio-image"
          src={folioPic}
          alt="A trifold folio, where each panel holds a column of three index cards.
        Each index card contains some of the stats and info that go into a character."
        />
      </a>
      I've never found a character sheet for 5th edition <abbr title="Dungeons & Dragons">D&D</abbr> that I like. So I
      came up with my own solution. I print the nine cards from the <a href={resolve('/')}>home page</a> and place them in
      a 3 by 3 folio I made.
    </p>
    <p>
      The cards use <a href="https://opendyslexic.org/">the OpenDyslexic fonts</a> by default. Please support them if you
      can!
    </p>
    <p>
      The idea is to print the cards from the home page on US Letter card stock, cut them out, and write on them with
      pencil. You can also fill in the text boxes and/or check boxes for things you know are going to be permanent. I
      opted not to do any automatic calculation of stats/saves/etc. because I like to account for things like Cloaks of
      Protection without torturing myself. This is intended to be simple and mostly
      <abbr title="do it yourself">DIY</abbr>.
    </p>
    <p>This handles a few things that fit the way I like to play:</p>
    <ul class="list-outside list-decimal ml-8">
      <li>Each card is easily replaceaable with a regular index card.</li>
      <li>They stand up better to erasing/rewriting than standard printer paper.</li>
      <li>
        I can customize future cards depending on what class(es) I play. For example, adding some boxes for tracking
        used Ki points or Sorcery points.
      </li>
      <li>
        There's plenty of extra room on the backs of cards for other notes or for info that isn't used that often.
      </li>
      <li>
        I can tuck other cards behind the nine main ones, too. (There's a card tucked behind the middle column in the
        above photo that just lists all this character's spells.)
      </li>
      <li>
        Color-coded stats/skills. Because that's how I think of them. I've been playing for some time, and I know what
        uses <abbr title="intelligence">INT</abbr> and what uses <abbr title="wisdom">WIS</abbr>.
      </li>
      <li>Minimal "wasted" space on things I don't regularly use.</li>
      <li>More lines than a standard index card.</li>
    </ul>
    <p>
      Obviously, there are some things missing. It's very opinionated toward my specific style of play. It's also not
      that hard to add/modify with an ink pen after printing. This is built with <a href="https://svelte.dev/">svelte</a
      >.
    </p>
    <p>Dig it or don't! Cheers!</p>
  </div>
  <h2 class="pt-2">Help</h2>
  <div class="with-img">
    <p>
      <img
        id="help-controls-image"
        src={controlsPic}
        alt="A screenshot of the controls for fonts and sizes on the home page.
          There are two columns - Card Label Font and Card Input Font.
          Under each column, there are the following controls:
          1) A drop-down selection box for the font face.
          2) A percentage slider marked Size Adjustment.
          3) A Reset Adjustment button.
          4) A Reset All button.
        These controls are explained in detail in the text of the page."
      />
      The cards on the home page can have text filled into any text box. The text from these boxes will print, while leaving
      out the background and border that show when they're active.
    </p>
    <p>There are some controls available for customizing the fonts used on the cards.</p>
    <ul class="list-outside list-disc ml-8">
      <li>
        <strong>Fonts</strong>
        <ul class="list-outside list-disc ml-8">
          <li>
            <em>Card Label Font</em>: This controls the font that is used for the static text on the cards. For example,
            <em>Name:</em> at the top of the first card.
          </li>
          <li>
            <em>Card Input Font</em>: This controls the font that is used for entered text on the cards. For example, if
            you enter something in the <em>Name</em> field on the first card, it will display and print in this font.
          </li>
          <li>
            <em>Size Adjustment</em>: For each font, this scales the font up or down. I sized the fields based on the
            OpenDyslexic font, and gave all other fonts a default adjustment of 80%, but I haven't tested them all.
          </li>
          <li>
            <em>Reset Adjustment</em>: This button will reset the size adjustment for the currently selected label/input
            font back to the default.
          </li>
          <li>
            <em>Reset All</em>: This button will reset the size adjustment for all label/input fonts back to the
            default.
          </li>
        </ul>
      </li>
      <li>
        The last font you used for each type is saved, as are size adjustments you make for each font and type. So if
        you used Arial at 75% for labels and Courier New at 60% for inputs, those settings will be rememebered.
      </li>
    </ul>
  </div>
</Bordered>

<style>
  h1,
  h2,
  ul {
    margin-top: 0;
  }

  #help-folio-image {
    border-radius: 30px;
    aspect-ratio: 1280 / 700;
    max-width: 50%;
    min-width: 300px;
    float: right;
    margin-left: 15px;
  }

  #help-controls-image {
    width: 495px;
    height: 263px;
    float: right;
    margin-left: 15px;
  }

  .with-img {
    display: block !important;
  }
</style>
