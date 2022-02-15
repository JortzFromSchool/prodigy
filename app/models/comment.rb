class Comment < ApplicationRecord
    validates :author_id, :annotation_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :annotation,
        foreign_key: :annotation_id,
        class_name: :Annotation
end
