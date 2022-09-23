class AddAssocThreatsToAnimal < ActiveRecord::Migration[6.1]
  def change
    add_column :animals, :assoc_threats, :text, array: true, default: []
  end
end
