class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.timestamps
    end
    add_column :questions, :topic_id, :integer
    add_index :topics, :title
  end
end
