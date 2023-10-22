class Todo < ApplicationRecord
	def toggle_check!
    self.check = !self.check
    save
  end
end
