class Question < ApplicationRecord
    validates :author_id, :body, presence: true

    belongs_to :author,
        class_name: :User

end