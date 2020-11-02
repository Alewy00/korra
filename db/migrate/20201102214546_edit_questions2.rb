class EditQuestions2 < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :topic_id, :integer
  end
end
