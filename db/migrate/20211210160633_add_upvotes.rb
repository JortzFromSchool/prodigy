class AddUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :author_id, null: false
      t.integer :annotation_id, null: false
      t.integer :value, null: false
      t.timestamps
    end
  end
end
