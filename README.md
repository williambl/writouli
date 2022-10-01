# Writouli

Writouli is an editor for [Patchouli](https://github.com/Vazkii/Patchouli/) books. It handles creation of all the JSON files required,
and builds your books using translation keys for texts, so that your book is fully translatable with resource packs.

## How to use

The editor can be accessed at https://writouli.willbl.dev/.

Some fields are not necessary for most books. They can be hidden with the 'Show/Hide Advanced' button at the bottom.

It works in a four-tier system: You write pages, which are contained by Entries, which are contained by Categories, which are contained by a Book.

I recommend using this guide in conjunction with the [Patchouli Wiki](https://vazkiimods.github.io/Patchouli/) to write your book.

Opening the editor, you will see a form where you can fill in details for your book.

Your book ID should be a proper [Namespaced ID](https://minecraft.gamepedia.com/Namespaced_ID).

At the bottom will be a 'Categories' field. Click the `+` button to create a new category.

Category IDs are just strings; they are not namespaced.

Within each category, you can add entries in a similar way to how you added categories.

Within entries, you can add pages.

The 'Type' field for a page takes a namespaced ID for the type your page will be. The editor currently supports the following page types:
 - `patchouli:text`
 - `patchouli:image`
 

Once you've created your book, you can export it with the 'Download ZIP' button at the bottom.

## Contributing Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
