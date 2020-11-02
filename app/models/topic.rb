class Topic < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :questions,
    foreign_key: :topic_id

    has_many :authors, through: :questions

end