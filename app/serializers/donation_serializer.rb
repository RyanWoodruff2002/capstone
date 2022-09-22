class DonationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :animal_id, :amount
end
