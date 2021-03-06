class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :body, null: false
      t.integer :question_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :answers, :question_id 
    add_index :answers, :author_id 
  end
end
