
module Abilities 
  Ability.destroy_all

  # 5th Edition
  # Core Rule Book
  area_lore = Ability.create!(name: "(Area) Lore",
  description: "Knowledge of one particular region, covenant, or even a village. It includes knowing where things are in the immediate area, local history and legends, and the centers of power in the region. The smaller the region, the more detailed your knowledge. Specialties: geography, history, legends, politics, personalities.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  animal_handling = Ability.create!(name: "Animal Handling",
  description: "Care and use of animals, including raising, tending, grooming, and healing them. Specialties: falconry, specific animals.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

end