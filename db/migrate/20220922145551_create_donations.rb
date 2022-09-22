class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :user_id
      t.integer :animal_id
      t.integer :amount

      t.timestamps
    end
  end
end
