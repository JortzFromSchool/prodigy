# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  artist_id    :integer          not null
#  lyrics       :text             not null
#  description  :text
#  release_date :date
#  album_id     :integer          not null
#  track_number :integer
#  producer_id  :integer
#  views        :integer
#  genre        :string           not null
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Track < ApplicationRecord

    validates :title, :artist_id, :lyrics, :album_id, :genre, presence: true
    
    has_one_attached :photo

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    belongs_to :producer,
        foreign_key: :producer_id,
        class_name: :User
end
