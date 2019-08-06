# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  rating        :integer          not null
#  restaurant_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord

    validates :rating, inclusion: { in: (1..5) }

    belongs_to :restaurant
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end
