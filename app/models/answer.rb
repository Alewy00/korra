
class Answer < ApplicationRecord
    validates :body, :question_id, :author_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question 

end