class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :video_url, :imageLink

  has_many :donations
end
