class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.integer "user_id", null: false
      t.integer "teacher_id", null: false
      t.text "instructions"
      t.integer "minutes_to_complete"
      t.timestamps
    end
  end
end
