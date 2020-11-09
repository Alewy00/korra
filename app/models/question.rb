class Question < ApplicationRecord
    validates :author_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    # belongs_to :topic,
    # foreign_key: :topic_id,
    # class_name: :Topic
        
    has_many :answers


    def self.search(search)
        if search
             body = Question.find_by(body: search)
                return body
        else
            return @questions = Question.all
        end
    end


end