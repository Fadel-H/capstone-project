# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_07_034409) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "score"
    t.integer "episodes"
    t.string "status"
    t.datetime "last_update"
    t.string "author"
    t.string "artist"
    t.integer "reviews_id"
    t.string "user_status"
    t.integer "user_episode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "manga_anime_bridges", force: :cascade do |t|
    t.integer "manga_id"
    t.integer "anime_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mangas", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "score"
    t.integer "chapters"
    t.string "status"
    t.datetime "last_update"
    t.string "author"
    t.string "artist"
    t.integer "reviews_id"
    t.string "user_status"
    t.integer "user_chapter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "username"
    t.string "comment"
    t.datetime "date_posted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "profile_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end