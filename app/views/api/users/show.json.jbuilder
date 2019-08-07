json.partial! "api/users/user", user: @user
json.reservationIds @user.reservations.pluck(:id)