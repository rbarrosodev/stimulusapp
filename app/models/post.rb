class Post < ApplicationRecord
  has_and_belongs_to_many :tags
  accepts_nested_attributes_for :tags, reject_if: :all_blank

  validates :title, :content, presence: true
  validates :title, uniqueness: true
end
