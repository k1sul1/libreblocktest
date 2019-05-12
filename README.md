# Libreblocktest
## Config for bundling JS (React) components into UMD bundles
UMD bundles can be loaded with XHR, and then eval'd. Or you could just use a script tag like a normal person.

## Why
This allows a host application to consume external components. This can be very useful if you're building something like an open source pagebuilder. Dependencies like React are not included in the UMD bundle, and are provided by the host app. This is important so you don't load React 10 times.

## This isn't very useful on it's own
IKR. I plan on building a special webpack loader based on this, so that it's easy to create blocks for the pagebuilder I'm building.

Say you have a hand-crafted WordPress theme that's already using webpack to build it's assets, and you want to create 10 blocks for the builder. Just add the loader to your config and enqueue the files it builds whenever the pagebuilder is used.

Or you're happy with the defaults, and just need to create one block. Just write your block and use this oneliner `thathasnotbeenwrittenyet` and your block is usable. If you then want to create more blocks, you can do so with minor tweaks to the config.

The idea is to hide all the useless shit like babel and the 70 different plugins you have to use to write the latest and greatest React behind one dependency. Similar to create-react-app.
