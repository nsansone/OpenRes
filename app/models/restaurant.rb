class Restaurant < ApplicationRecord
    validates :name, :address, :phone, :website, :lat, :lng, presence: true

end