# Life RPG — browser preview

This public repository is reserved for **compiled browser preview assets only**.

The Life RPG application source code and development history remain in a separate private repository. The compiled preview may be accessible to anyone on the internet.

## Deployment

The private source repository's `Browser Preview` workflow builds the web assets and publishes **only** the `dist/` directory to this repository's `gh-pages` branch.

Once the first deployment completes, configure **Settings → Pages → Deploy from a branch → gh-pages / (root)**. The resulting preview should be available at:

https://spongecake07.github.io/Life_RPG_preview/

## Privacy and data

Do not commit source code, backups, characters, signing files, credentials, or private data here. The browser preview keeps user-entered progress in browser-local IndexedDB; it is not synchronized with Android or GitHub. Export a backup before clearing browser storage.

This README does not contain the website itself; the preview URL will work only after successful deployment and GitHub Pages configuration.
