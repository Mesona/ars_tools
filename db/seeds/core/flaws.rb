
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

  age_quickly = Flaw.create!(name: "Age Quickly"),
    descrtiption: "Probably due to a curse or a magical disas- ter, you age twice as fast as normal people. Your effective age (which applies as if it were your actual age when creating a Longevity Ritual, and when making rolls on the Aging table) increases two years for every year that passes, and you make two aging rolls each year. There is no way to halt or slow this other than Longevity Rituals.",
    flaw_type: "Supernatural",
    book: "Core",
    major: true)

  ambitious_major = Flaw.create!(name: "Ambitious"),
    descrtiption: "You want to be the most successful or powerful person in the world in some respect. You will not be distracted into doing things that do not contribute to your ambition, and are very eager to do things that advance it.",
    flaw_type: "Personality",
    book: "Core",
    major: true)
  
  ambitious_minor = Flaw.create!(name: "Ambitious"),
    descrtiption: "You want to be the most successful or powerful person in the world in some respect. You will not be distracted into doing things that do not contribute to your ambition, and are very eager to do things that advance it.",
    flaw_type: "Personality",
    book: "Core",
    major: false)
  
  animal_companion = Flaw.create!(name: "Animal Companion"),
    descrtiption: "You are accompanied by a loyal, intelligent (but mundane) animal that can obey simple com- mands. Your relationship with it is very close. If it should die, you would be profoundly upset.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  arthiritis = Flaw.create!(name: "Arthiritis"),
    descrtiption: "Your joints are stiff and often painful, mak- ing almost any prolonged movement difficult. You are at –3 to rolls involving repetitive move- ment, sustained over time. Occasionally, the pain is so great that you are seriously disabled. On any movement or combat botch, one of your joints may “lock up,” making the limb effec- tively useless (–6 to all rolls involving it) until you have a chance to rest it for a day or two.",
    flaw_type: "General",
    book: "Core",
    major: false)

  avaricious_major = Flaw.create!(name: "Avaricious"),
    descrtiption: "You want money, lots of money. When you have it, you do not spend it, but hoard it so that you can count it. You can be avaricious about physical things other than money, such as books or raw vis. In this case, you do not use the things you hoard, nor do you allow others to use them.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  avaricious_minor = Flaw.create!(name: "Avaricious"),
    descrtiption: "You want money, lots of money. When you have it, you do not spend it, but hoard it so that you can count it. You can be avaricious about physical things other than money, such as books or raw vis. In this case, you do not use the things you hoard, nor do you allow others to use them.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  black_sheep = Flaw.create!(name: "Black Sheep"),
    descrtiption: "You come from a prestigious family, but you have somehow estranged yourself from your relatives. They have nothing to do with you, unless they wish to punish you somehow or make use of you. Those who resent your family’s power can take safe revenge by assault- ing you. You begin the game with a bad Reputation of your choice at level 2, among those who respect your family.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  blackmail = Flaw.create!(name: "Blackmail"),
    descrtiption: "You have information that some powerful person would prefer kept hidden. You receive payments or services in return for your silence, and you may occasionally demand special favors. Don’t push your luck — your victim may decide it isn’t worth the cost, or silence you permanently. This benefit has a yearly value of about 50 silver pennies, possibly more if you keep the pressure on. You should detail and record the specifics of this arrangement.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  blatant_gift = Flaw.create!(name: "Blatant Gift"),
    descrtiption: "People immediately realize that there is something strange about you, even if they do not know you are a magus. Animals are extremely disturbed, frightened, and possibly enraged by your presence. You suffer a –6 penalty on all interaction rolls with normal people and animals, and should see page 75 for further discussion of this Flaw’s effects.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  blind = Flaw.create!(name: "Blind"),
    descrtiption: "You have little or no sight. Using missile weapons is futile, reading is impossible, and nav- igation in unknown territory is difficult to say the least. Blind magi can detect targets by other senses, and thus are less limited than people try- ing to use missile weapons. However, blind magi cannot aim spells without magical aid.",
    flaw_type: "General",
    book: "Core",
    major: true)

  branded_criminal = Flaw.create!(name: "Branded Criminal"),
    descrtiption: "As punishment for some crime in your past, a mark has been burned into your cheek. This adversely affects your ability to function in society. You may not take the Wealthy Virtue, but you may take Martial Abilities at character creation. You may choose not to take such abilities, if your crime was not violent.",
    flaw_type: "Social Status",
    book: "Core",
    major: false)

  busybody = Flaw.create!(name: "Busybody"),
    descrtiption: "You usually know everything that is going on among your friends and acquaintances, especially in private matters. You are always interested in rumors and gossip, and are fre- quently able to extract personal secrets from people. Among magi the language is more dig- nified, but the idea is the same: you keep tabs on the Hermetic community (your covenant, your House, and nearby covenants — at the least). However, magi probably don’t have much knowledge of what’s going on among the lower class members of their covenant unless they choose to apply this Flaw specifically to such people at character creation.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  carefree = Flaw.create!(name: "Carefree"),
    descrtiption: "You are unshakably cheerful and happy in all circumstances.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  careless_sorcerer = Flaw.create!(name: "Careless Sorcerer"),
    descrtiption: "You are slapdash in your use of magical power, and must roll two more botch dice more than normal when casting spells. Note that if you would normally roll no botch dice, you still roll none.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  chaotic_magic = Flaw.create!(name: "Chaotic Magic"),
    descrtiption: "Your magic is very wild. When you cast a spontaneous spell, you must specify a desired level of effect. If you fall short of or exceed that target by more than one level, the spell still works, but its effects are beyond your control — the storyguide decides the results. The level of effect includes any levels you assign to Penetration.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  close_family_ties = Flaw.create!(name: "Close Family Ties"),
    descrtiption: "Your family is one of the most important things in your life, and still supports and aids you whenever possible, even at personal risk. Family members do not hesitate to do you any favor that is within their power, and can call on their friends and neighbors to help you. It works both ways, however; your family may require help from you some day.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  clumsy = Flaw.create!(name: "Clumsy"),
    descrtiption: "You are not very graceful and tend to drop things — you are at –3 in all related rolls. Furthermore, roll an extra botch die when tak- ing actions related to Dexterity. Roleplay your clumsiness.",
    flaw_type: "General",
    book: "Core",
    major: false)

  clumsy_magic = Flaw.create!(name: "Clumsy Magic"),
    descrtiption: "You have trouble aiming your spells accu- rately. Any aiming roll (see page 86) is subject to disastrous failure: an aiming roll of 0 is auto- matically a botch. (Aiming rolls do not count as mystical rolls for the purposes of gaining Warping Points.) You receive a –3 penalty to any rolls involving Finesse.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  compassionate_major = Flaw.create!(name: "Compassionate"),
    descrtiption: "You help anyone who is wounded or in trou- ble. You cannot bear to see suffering in others, although you happily drive yourself to exhaustion.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  compassionate_minor = Flaw.create!(name: "Compassionate"),
    descrtiption: "You help anyone who is wounded or in trou- ble. You cannot bear to see suffering in others, although you happily drive yourself to exhaustion.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  compulsion = Flaw.create!(name: "Compulsion"),
    descrtiption: "You have an unfortunate urge that causes you problems. Examples include drinking, sex, perfection, bragging, or gambling.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  continence = Flaw.create!(name: "Continence"),
    descrtiption: "You do not engage in sexual activity. This may be due to a vow of celibacy, or simply per- sonal choice.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  convenant_upbringing = Flaw.create!(name: "Covenant Upbringing"),
    descrtiption: "You were raised in a large, old covenant that has little contact with the outside world. You might have very strange religious beliefs, and you certainly find medieval social and political struc- tures very odd. You may take Latin and Order of Hermes Lore at character creation. While Latin cannot be your native language, you may speak a language closely related to Latin that is spoken only at your home covenant.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  creative_block = Flaw.create!(name: "Creative Block"),
    descrtiption: "You have problems creating new things in the lab. You receive –3 on Lab Totals when you invent new spells, craft magic items, and make potions, unless you are working from a lab text. If you experiment, roll twice as many dice on the experimentation table.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  crippled = Flaw.create!(name: "Crippled"),
    descrtiption: "You either have no legs, or your legs are completely useless. You may have lost them in an accident or as a punishment. You cannot walk, although you may drag yourself along the ground, or push a trolley around with a stick.",
    flaw_type: "General",
    book: "Core",
    major: true)

  curse_of_venus = Flaw.create!(name: "Curse of Venus"),
    descrtiption: "You are very attractive to people whom you do not wish to attract. People you detest keep getting crushes on you, and will not be dissuaded. Furthermore, you tend to fall in love with inappropriate people, and in inappropri- ate circumstances. Those people you are inter- ested in tend to think you are vain and shallow.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  cyclic_magic_negative = Flaw.create!(name: "Cyclic Magic (Negative)"),
    descrtiption: "As with the Hermetic Virtue, your magic is attuned to some cycle of nature and is less potent at specific times. You have a –3 penalty to all Lab Totals and Casting Totals during that time. The length of time during which you are at a disadvantage must be equal to the time when there is no penalty.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  dark_secret = Flaw.create!(name: "Dark Secret"),
    descrtiption: "You are haunted by something that would lead to shame, rejection, and possibly revenge if discovered. Hints about the secret continual- ly arise, and there might be others who know it and could betray you. This makes you avoid certain places, dislike certain people, or fear certain things.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  # = Flaw.create!(name: ""),
  #   descrtiption: "",
  #   flaw_type: "",
  #   book: "Core",
  #   major: false)

end