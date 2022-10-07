class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :username
      t.string :comment
      t.datetime :date_posted

      t.timestamps
    end
  end
end
