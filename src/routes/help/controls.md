<script lang="ts">
  import characterControlsPic from '$lib/assets/character_controls.webp';
  import controlsTogglePic from '$lib/assets/control_toggle.webp';
  import fontControlsPic from '$lib/assets/font_controls.webp';

  const charControlsAlt = `A set of controls for characters:
        1) a 'Clear Character' button,
        2) a 'Download Character' button,
        and 3) a file upload control labeled 'Upload Character'` as const;
  const fontControlsAlt = `A set of font controls in two columns (Card Label Font and Card Input Font).
        Each column features a dropdown control to select the font, a Size Adjustment slider, 
        a Reset Adjustment button and a Reset All button.` as const;
</script>

# D&D 5e Character Index Cards
  
## Help

The cards on the home page can have text filled into any text box. The text from these boxes will print, while
leaving out the background and border that show when they're active. The page saves all text entered on the cards between visits.
  
The controls at the top of the page can be used to change the fonts on the cards, or save and load characters.

![A toggle with 'controls visible' and 'controls hidden' settings]({controlsTogglePic} "Control visibility toggle")

The character and font controls can be displayed or hidden with the <em>controls visible/hidden</em> toggle. This is nice if you want to just use the page as a character sheet instead of printing.

---

![{charControlsAlt}]({characterControlsPic} "Character controls")

Character controls allow saving and loading characters for later use/updating.

- **Clear Character:** This button will simply clear all the cards, leaving them blank.
- **Download Character:** This button downloads the current values on the cards as a *.json* file.
- **Upload Character:** This is a file upload control. Uploading a *.json* file will populate the cards with its stored character.

---

![{fontControlsAlt}]({fontControlsPic} "Font controls")

Font controls allow changing the face and size of the fonts the cards use. Your last font selections are saved between visits. And for each font, the page saves the size set for that font. The **Card Label Font** is the font used on the static text on the cards. The **Card Input Font** is the font used for the text input fields. Each of these fonts has its own set of controls.

- **Font:** Select the font face to use. Defaults to [OpenDyslexic]("https://opendyslexic.org/").
- **Size Adjustment:** Scales the font up or down. I sized the fields based on the OpenDyslexic font, and gave all other fonts a default adjustment of 80%, but I haven't tested them all.
- **Reset Adjustment:** Resets the size adjustment for the currently selected font back to the default.
- **Reset All:** This button will reset the size adjustment for all fonts back to the default.

---

