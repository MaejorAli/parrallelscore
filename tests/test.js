/**
 * 1. Navigate to parallelscore.com
 * 2. Assert that page loads
 * 3. click on careers
 * 4. Assert that career page loads
 * 5. Click on category
 * 6. Input category
 * 7. Click on location
 * 8. Input location
 * 9. Click on search button
 * 10. Assert that search result loads
 * 11. Asset that pagination tabs are visible
 * 12. End
*/
module.exports = {
 
  'Step one: Navigate to parallelscore.com': function (browser) {
    browser
      .url('https://parallelscore.com//')
      .waitForElementVisible('body')
      .assert.titleContains('ParallelScore')
      .click('div.mc-closeModal')
  },

  'Step two: Click on Careers and Search': function (browser) {
    browser
      .click('#menu-item-6309 > a')
      .assert.titleContains('Careers')
      .click('#category')
      .click('#category > option:nth-child(4)')
      .click('#location')
      .click('#location > option:nth-child(2)')
      .assert.visible('.btn-search')
      .click('.btn-search')
  },

  'Step three: Load Search result': function (browser) {
    browser
      .waitForElementVisible('.wpb_wrapper')
      .assert.visible('.list-data:nth-child(1)')
      .assert.containsText('.list-data:nth-child(1)', 'Automation QA Engineer')
      .assert.containsText('.list-data:nth-child(1) .job-location', 'Lagos, Nigeria')
      .assert.visible('.list-data:nth-child(1) .btn-primary')
      .assert.visible('.list-data:nth-child(3)')
      .assert.containsText('.list-data:nth-child(3)', 'Senior Software/DevOps Engineer')
      .assert.containsText('.list-data:nth-child(3) .job-location', 'Lagos, Nigeria')
      .assert.visible('.list-data:nth-child(3) .btn-primary')
      .assert.visible('.list-data:nth-child(5)')
      .assert.containsText('.list-data:nth-child(5)', 'JAVA SOFTWARE ENGINEER ')
      .assert.containsText('.list-data:nth-child(5) .job-location', 'Lagos, Nigeria')
      .assert.visible('.list-data:nth-child(5) .btn-primary')
      .assert.visible('.pagination .list-item:nth-child(2)')
      .assert.visible('.pagination .list-item:nth-child(3)')
      .end();
  }
};