
module Flaws
  Flaw.destroy_all

  # 5th Edition
  # Core Rule Book
  ability_block = Flaw.create!(name: "Ability Block",
    description: "You are completely unable to learn a cer- tain class of Abilities, for some reason. This may be Martial Abilities, or a more limited set of the others. A profound inability to master logic would rule out Artes Liberales, Philosophiae, any Law, Medicine, and Theology. Alternatively, you might be unable to learn any languages other than your native tongue. It must be possible for your character to learn the abilities in question, but she need have no intention of doing so. You may only take this Flaw once.",
    book: "Core",
    flaw_type: "General",
    major: false)

  afflicted_tongue = Flaw.create!(name: "Afflicted Tongue",
    description: "You have a speech impediment, such as a lisp, stutter, or missing teeth. You suffer a –2 to all rolls involving the voice. If you are a magus, you must also roll an extra botch die when cast- ing a spell using words.",
    book: "Core",
    flaw_type: "General",
    major: false)

end