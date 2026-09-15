HIS DUDENESS v48 — GitHub assets edition
==========================================

This build keeps the v48 game/campaign behaviour but removes embedded base64 media.

ROOT
  index.html             Intro + Level 1
  level2.html            Level 2 + interlude
  level3.html            Level 3 + interlude
  level4.html            Level 4 + interlude
  level5.html            Level 5 + interlude
  level6.html            Level 6 + arrest transition
  level7.html            Level 7 + interlude
  level8.html            Level 8 + finale

JAVASCRIPT
  js/game-bootstrap.js   Campaign routing / localStorage handoff
  js/game-core.js        Shared game logic, manifests and sound URL map

ASSETS
  assets/images/         631 external image files
  assets/audio/          157 external audio files

GitHub / GitHub Pages
---------------------
Upload the unzipped folder contents while preserving this directory structure.
There are no base64 image/audio banks and no source file in this build is near 25 MB.
GitHub Pages should serve index.html directly.

Local testing
-------------
Audio now uses normal HTTP fetch requests. For reliable testing, serve the folder through
a local web server instead of double-clicking index.html as file://.
For example, from this folder:

  python -m http.server 8000

Then open:
  http://localhost:8000/

Campaign routing
----------------
After each level/interlude, the next HTML page is loaded. Campaign state is handed off
through localStorage by js/game-bootstrap.js.

Generated from His-Dudeness-v48-github split build.
