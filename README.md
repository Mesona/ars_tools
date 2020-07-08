# README

This is going to be a series of tools to aid with the running of, and participation in, Ars Magica campaigns.  The tool sets will be split into 3 categories, to be fleshed out later.

1) Character Tools
 * Character Creation, choose from Mage, Companion, Grog, Mythical Companion, and custom rules
 * Select which books to include/exclude
 * Generates a "live" character sheet that should provide applicable roll values

 2) Covenant Tools
 * Vis tracking, automatic (for sources that are auto success) and reminders for manual checks
 * Automatic Aura upgrade/downgrade checks/reminders (Optional, can be turned off)
 * Laboratory creation and automatic calculation if a character is assigned to it
 * Character assignment to Covenant
 * Simple or complex laboratory customization rules (simple will mimic the custom homebrew system my campaign uses, complex will use the book rules if I get to it)
 * Finance management (My campaign hand waves most of this, so will be a later addition)
 * Mundane management (Automatic aging, simple/complex systems)
 * Possibly crafter slot assignments to aid with covenant finances

3) Campaign Tools
 * Ability to assign convenants (and all their assigned characters) as well as individual characters
 * Random event generators (Vis sources, monster encounters, political happenings?)
 * Twilight scar suggestions / twilight tools
 * ??? other tools

4) NPC Tools (Later addition)
 * Rules for creating Fey / Demon / Angelic / Magic monsters and NPCs
 

# Installation steps
* If you don't have postgres install, install it (https://postgresapp.com/).
* Postgres must be configured to work with ruby/rails. In the case of `postgresapp` above, this means the following commands (Per the installation instructions)
* Add postgressapp to your paths
1. run ` sudo mkdir -p /etc/paths.d`
1. run `echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* Configure postgres to work with rails
1. run `sudo ARCHFLAGS="-arch x86_64" gem install pg` (one time. In order to make rails work with posgres)
* If you don't have a ruby environment manager, install rbenv
1. Instal rbenv
1. `rbenv --version`
1. rbenv returned: ```rbenv: version `2.5.1' is not installed```
1. run `rbenv install 2.5.1`
* If you don't have bundler, install it
1. run `gem install bundler`
1. run `rbenv rehash`
* install NPM, Rails and Gem packages
1. run `npm install`
1. run `bundle install`
1. run `rails db:create`
1. run `rails db:migrate`
1. run `rails db:seed`
1. run `rails s`
1. in a separate tab, run `npm run start`
1. the local webserver can be accessed at `http://localhost:3000/`
1. develop
