class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false
      t.integer :track_id, null: false
      t.string :annotation_string, null: false
      t.string :annotation_body, null: false
      t.timestamps
    end
  end
end
