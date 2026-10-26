<script lang="ts">
  import { resolve } from '$app/paths';
  import characterControlsPic from '$lib/assets/character_controls.webp';
  import controlsTogglePic from '$lib/assets/control_toggle.webp';
  import folioPic from '$lib/assets/folio.webp';
  import fontControlsPic from '$lib/assets/font_controls.webp';
  import Bordered from '$lib/modules/ui/bordered.svelte';
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards - Help</title>
</svelte:head>

<Bordered print={true}>
  <h1>D&D 5e Character Index Cards</h1>
  <h2 class="pt-2">Help</h2>
  <div>
    <p>
      The cards on the home page can have text filled into any text box. The text from these boxes will print, while
      leaving out the background and border that show when they're active. The page saves all text entered on the cards
      between visits.
    </p>
    <p>
      The controls at the top of the page can be used to change the fonts on the cards, or save and load characters.
    </p>
  </div>

  <div class="with-image mb-8">
    <p>
      <img
        id="help-controls-toggle-image"
        src={controlsTogglePic}
        alt="A toggle with 'controls visible' and 'controls hidden' settings"
      />
      The character and font controls can be displayed or hidden with the <em>controls visible/hidden</em> toggle. This is
      nice if you want to just use the page as a character sheet instead of printing.
    </p>
  </div>
  <div class="with-image mb-8">
    <img
      id="help-character-controls"
      src={characterControlsPic}
      alt="A set of controls for characters:
        1) a 'Clear Character' button,
        2) a 'Download Character' button,
        and 3) a file upload control labeled 'Upload Character'"
    />
    Character controls allow saving and loading characters for later use/updating.
    <ul class="list-outside list-disc pl-4 pt-2 overflow-auto">
      <li><strong>Clear Character:</strong> This button will simply clear all the cards, leaving them blank.</li>
      <li>
        <strong>Download Character:</strong> This button downloads the current values on the cards as a
        <em>.json</em> file.
      </li>
      <li>
        <strong>Upload Character:</strong> This is a file upload control. Uploading a <em>.json</em> file will populate the
        cards with its stored character.
      </li>
    </ul>
  </div>

  <div class="with-image mb-8">
    <img
      id="help-font-controls"
      src={fontControlsPic}
      alt="A set of font controls in two columns (Card Label Font and Card Input Font). Each column features a dropdown
      control to select the font, a Size Adjustment slider, a Reset Adjustment button and a Reset All button."
    />
    Font controls allow changing the face and size of the fonts the cards use. Your last font selections are saved between
    visits. And for each font, the page saves the size set for that font. The <strong>Card Label Font</strong> is the
    font used on the static text on the cards. The <strong>Card Input Font</strong> is the font used for the text input
    fields. Each of these fonts has its own set of controls.
    <ul class="list-outside list-disc pl-4 pt-2 overflow-auto">
      <li>
        <strong>Font:</strong> Select the font face to use. Defaults to
        <a href="https://opendyslexic.org/">OpenDyslexic</a>.
      </li>
      <li>
        <strong>Size Adjustment</strong>: Scales the font up or down. I sized the fields based on the OpenDyslexic font,
        and gave all other fonts a default adjustment of 80%, but I haven't tested them all.
      </li>
      <li>
        <strong>Reset Adjustment</strong>: Resets the size adjustment for the currently selected font back to the
        default.
      </li>
      <li>
        <strong>Reset All</strong>: This button will reset the size adjustment for all fonts back to the default.
      </li>
    </ul>
  </div>

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
          class="aspect-1280/700 max-w-1/2 min-w-xs ml-1! float-right!"
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
        Skills organized by (color-coded) stats. Because that's how I think of them. I've been playing for some time,
        and I know what uses <abbr title="intelligence">INT</abbr> and what uses <abbr title="wisdom">WIS</abbr>.
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
</Bordered>

<style>
  h2 {
    margin-top: 0;
  }

  img {
    float: left;
    margin-right: 20px;
  }
</style>
