/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {"id": 1, "stickerSymbol": 'MSFT', "accountingChange":null,"basicEpsNetIncome":"1.49","costOfRevenue":"33038000000.0","depreciationAmortizationExpense":null,"dilutedEpsNetIncome":"1.48","discontinuedOperations":null,"earningsBeforeInterestAndTax":"18161000000.0","equityEarnings":null,"extraOrdinaryItems":null,"grossProfit":"60542000000.0","incomeBeforeExtraordinaryItems":"12193000000.0","incomeBeforeTaxes":"18507000000.0","incomeTaxes":"6314000000.0","interestExpense":null,"interestIncome":null,"minorityInterestEquityEarnings":null,"netIncome":"12193000000.0","netIncomeApplicableToCommon":"12193000000.0","operatingProfit":"18161000000.0","otherNonOperatingIncomeExpense":"346000000.0","otherOperatingExpenses":null,"researchDevelopmentExpense":"12046000000.0","restructuringRemediationImpairmentProvisions":"10011000000.0","sellingGeneralAdministrativeExpenses":"20324000000.0","totalRevenue":"93580000000.0"}

  // {
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and f\unctions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
// }

);
