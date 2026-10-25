export const THEME = {
  button: { base: `font-bold gap-1 rounded-sm whitespace-nowrap` },
  checkbox: {
    base: `rounded-none 
             w-[var(--size,calc(1in/8))]
             h-[var(--size,calc(1in/8))]
             outline-purple-500
             m-auto focus:ring-0
             bg-none checked:bg-none
             bg-transparent dark:bg-transparent
             border-gray-400 dark:border-gray-500
             text-black dark:text-white
             print:[print-color-adjust:exact]
             `,
  },
  fileupload: {
    base: `rounded-sm
           border-2
           border-primary-700 dark:border-primary-600
           focus:border-primary-700
           focus:dark:border-primary-700
           focus:outline-2 focus:outline-solid
           focus:outline-primary-700 focus:dark:outline-primary-700
           focus:outline-offset-1
           file:bg-primary-700 dark:file:bg-primary-600
           file:hover:bg-primary-800 dark:file:hover:bg-primary-700
           file:text-white file:font-bold
           file:border-0 file:px-3 file:py-2 file:me-3 file:ms-0
           file:cursor-pointer
      `,
    wrapper: `rounded-sm`,
  },
  footer: `flex items-center justify-between rounded-none shadow-none
           start-0 bottom-0 w-full
           bg-transparent dark:bg-transparent
           bg-linear-to-l from-neutral-primary-medium/60 to-neutral-primary-medium
           text-body
           mt-6
           `,
  input: {
    base: 'h-full',
    input: `box-border block w-full m-0 px-[2px] py-0
            border-0 rounded-none
            bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-300
            focus:ring-0
            hover:not-disabled:bg-gray-300 hover:dark:not-disabled:bg-gray-700
            focus-visible:bg-gray-300 focus-visible:dark:bg-gray-700
            motion-reduce:transition-none
            print:bg-transparent
            print:outline-none
            print:[print-color-adjust:exact]
            print:text-gray-800
            `,
  },
  label: `font-bold text-lg m-0 p-0`,
  navbar: `bg-transparent dark:bg-transparent
           bg-linear-to-l from-neutral-primary-medium/60 to-neutral-primary-medium
           text-body
           mb-6
           `,
  navbarUl: {
    active: `text-body/70 dark:text-body/70
             hover:text-black dark:hover:text-white
             md:text-body/70 dark:md:text-body/70
             md:hover:text-black dark:md:hover:text-white
             font-bold
      `,
    nonActive: `text-fg-brand dark:text-fg-brand
                  hover:text-fg-brand-strong dark:hover:text-fg-brand-strong
                  md:text-fg-brand md:dark:text-fg-brand
                  md:hover:text-fg-brand-strong dark:md:hover:text-fg-brand-strong
                  `,
  },
  navbarLi: `py-0 md:py-0 text-lg`,
  select: {
    base: `rounded-sm`,
    select: `border-2
               border-purple-700 dark:border-purple-700
               rounded-sm`,
  },
} as const;
