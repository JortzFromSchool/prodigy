# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password
  
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    after_initialize :ensure_session_token

    has_many :tracks,
      foreign_key: :artist_id,
      class_name: :Track

    has_many :produced_tracks,
      foreign_key: :producer_id,
      class_name: :Track

    has_many :annotations,
      foreign_key: :author_id,
      class_name: :Annotation

    has_many :upvotes,
      foreign_key: :author_id,
      class_name: :Upvote

    has_many :comments,
      foreign_key: :author_id,
      class_name: :Comment
  
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      return nil unless user
      if user.is_password?(password)
        return user
      else
        return nil
      end
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save
      self.session_token
    end
  
    private
  
    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end
  
    def new_session_token
      SecureRandom.urlsafe_base64
    end
  
  end
