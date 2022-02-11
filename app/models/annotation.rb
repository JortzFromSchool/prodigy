# == Schema Information
#
# Table name: annotations
#
#  id                :bigint           not null, primary key
#  author_id         :integer          not null
#  track_id          :integer          not null
#  annotation_string :string           not null
#  annotation_body   :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Annotation < ApplicationRecord

    validates :author_id, :track_id, :annotation_string, :annotation_body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :track,
        foreign_key: :track_id,
        class_name: :Track

    has_many :upvotes,
        foreign_key: :annotation_id,
        class_name: :Upvote

end
