require 'rails_helper'

RSpec.feature "Posts", type: :feature do
  scenario 'Can view posts in reverse chronological order' do
    visit '/'
    click_link 'New post'
    fill_in 'Message', with: "Test Message 1"
    click_button 'Submit'
    click_link 'New post'
    fill_in 'Message', with: "Test Message 2"
    click_button 'Submit'
    first_index = page.body.index("Test Message 2")
    second_index = page.body.index("Test Message 1")

    expect(first_index).to be < second_index

  end
end