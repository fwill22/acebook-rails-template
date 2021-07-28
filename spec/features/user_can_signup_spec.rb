require 'rails_helper'

RSpec.feature "Registration", type: :feature do
  scenario 'Can sign up as a user' do
    visit '/'
    click_link 'Enter'
    within('div#signup_modal') do
      fill_in "Name", with: "Jane Doe"
      fill_in "Email", with: "jdoe@email.com"
      fill_in "DOB", with: "1992-01-01" 
      fill_in "Password", with: "password"
      fill_in "Password Confirmation", with: "password"
      click_button "Create Account"
    end
    expect(page).to have_content("Account Created")
  end
end
