require 'rails_helper'

RSpec.feature "Registration", type: :feature do
  scenario 'Can sign up as a user' do
    visit '/users'
    click_button 'Log in / Register'
    within('div#signup') do
      fill_in "Name", with: "Jane Doe"
      fill_in "Email", with: "jdoe@email.com"
      fill_in "Date of Birth", with: "1992-01-01" 
      fill_in "Password", with: "password"
      fill_in "Confirm Password", with: "password"
      click_button "Create Account"
    end
    expect(page).to have_content("Account Created")
  end
end
