class EditQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :topic_id
    # add_column :questions, :topic_id, :integer, null: false
  end
end
