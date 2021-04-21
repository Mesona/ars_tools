# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_05_020305) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "book", null: false
    t.string "ability_type", null: false
    t.boolean "unlearned_usable"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ability_type"], name: "index_abilities_on_ability_type"
    t.index ["book"], name: "index_abilities_on_book"
  end

  create_table "ability_associations", force: :cascade do |t|
    t.integer "ability_id"
    t.integer "character_id"
    t.integer "experience", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "specialization"
    t.index ["ability_id", "character_id"], name: "index_ability_associations_on_ability_id_and_character_id"
    t.index ["character_id"], name: "index_ability_associations_on_character_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "character_type", null: false
    t.string "name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "intelligence", default: 0
    t.integer "perception", default: 0
    t.integer "strength", default: 0
    t.integer "stamina", default: 0
    t.integer "presence", default: 0
    t.integer "communication", default: 0
    t.integer "dexterity", default: 0
    t.integer "quickness", default: 0
    t.integer "age", default: 0
    t.integer "appearant_age", default: 0
    t.string "gender"
    t.boolean "created", default: false
    t.index ["age"], name: "index_characters_on_age"
    t.index ["character_type"], name: "index_characters_on_character_type"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "characters_flaws", id: false, force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "flaw_id", null: false
    t.index ["character_id"], name: "index_characters_flaws_on_character_id"
    t.index ["flaw_id"], name: "index_characters_flaws_on_flaw_id"
  end

  create_table "characters_virtues", id: false, force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "virtue_id", null: false
    t.index ["character_id"], name: "index_characters_virtues_on_character_id"
    t.index ["virtue_id"], name: "index_characters_virtues_on_virtue_id"
  end

  create_table "flaw_associations", force: :cascade do |t|
    t.integer "flaw_id"
    t.integer "character_id"
    t.string "special"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_flaw_associations_on_character_id"
    t.index ["flaw_id", "character_id"], name: "index_flaw_associations_on_flaw_id_and_character_id"
  end

  create_table "flaws", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "book", null: false
    t.string "perk_type", null: false
    t.boolean "major"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creation_max", default: 1
    t.index ["book"], name: "index_flaws_on_book"
    t.index ["major"], name: "index_flaws_on_major"
    t.index ["perk_type"], name: "index_flaws_on_perk_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "virtue_associations", force: :cascade do |t|
    t.integer "virtue_id"
    t.integer "character_id"
    t.string "special"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_virtue_associations_on_character_id"
    t.index ["virtue_id", "character_id"], name: "index_virtue_associations_on_virtue_id_and_character_id"
  end

  create_table "virtues", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "book", null: false
    t.string "perk_type", null: false
    t.boolean "major"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "free", default: false
    t.integer "creation_max", default: 1
    t.index ["book"], name: "index_virtues_on_book"
    t.index ["major"], name: "index_virtues_on_major"
    t.index ["perk_type"], name: "index_virtues_on_perk_type"
  end

end
